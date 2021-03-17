/*
 * PersonnagesPage
 *
 * List all the personnages
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TablePerso from './TablePerso';
import CardPerso from './CardPerso';
import GridPerso from './GridPerso';

import { useEffect, useState } from 'react';

export default function PersonnagesPage() {

  const marvelTab = [];


  const handleCallAPIPerso = name => {
    // on utilise les bactics pour pouvoir variabiliser l'url avec la variable name en utilisant la synthaxe ${name}
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=168ac8865b5464d4e8ed9e5b2281ba79`;
    //fait un appel au serveur. fetch renvoie une promise
    fetch(url, init)
      //convertit le résultat qui est une chaine de cararactere en un tableau json
      .then(response => response.json())
      .then(json => {
        const data = json;
        const apiTab = data.data.results;
        console.log('apiTab', apiTab);

        // ajouter les donner de apiTab dans marvelTab
        //apiTab.map((x)=>{marvelTab.push(x)})

        //console.log('marvelTab ', marvelTab);
        //console.log('marvelTab 1ere ligne', marvelTab[0]);
        const myHook = ()=>{
          //console.log('test de myHook');
          //console.log('search', search);
          console.log('search.persos',search.persos);
          setSearch({...search, persos: apiTab})

          console.log('search apres setSearch',search.persos);
          //console.log('search.persos apres setSearch',search.persos);
        };
        myHook()
      })
      .catch(error => console.log(error)) // erreur json
      .catch(error => console.log(error)); // erreur API
  };

  const handleCheck = (e)=>{
    console.log('check',search.checked)
    const c = e.target.checked;
    setSearch({...search, checked: c})
  }

  //Ajoute des param au header de l'appel APi
  const myHeader = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  //
  const init = {
    method: 'GET',
    headers: myHeader,
    mode: 'cors',
  };

  //hook qui appelle la fonction responsable de la requete vers l'Api
  /*
  useEffect(() => {
    handleCallAPIPerso('spider'),[init];
  });
*/
  const initialsearch = {
    searchName: '',
    persos: [],
    checked : false
  };

  const [search, setSearch] = useState(initialsearch);

  // https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook





  return (
    <div>
      <Helmet>
        <title>Personnages Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        value={search.searchName}
        onChange={e => setSearch({ ...search, searchName: e.target.value })}
      />

      <Button
        variant="contained"
        color="primary"
        // il faut mettre handleCallAPIPerso dans une fonction sinon la handleCallAPIPerso est déclenché à chaque fois que le state du boutton est modifié car cela entraine un render
        onClick={()=>{handleCallAPIPerso(search.searchName)}}
      >
        Rechercher
      </Button>
      <FormControlLabel
            control={
              <Checkbox 
              checked={search.checked}
              onChange={handleCheck}
            />}
            label="Voir les résultats de la recherche sous forme de cartes"
          />


      {/* 
          Carte du 1er perso
          <CardPerso perso ={search.persos[0]}/>
      */}

      {/*Si la checkbox est true on affiche GridPerso sinon TablePerso */}
      { search.checked ? <GridPerso persos={search.persos}/> : <TablePerso persos={search.persos} />}
      
      {/** Si on n'a pas de perso on affiche une div vide */}
      { /*search.persos[0] ? <TablePerso persos={search.persos} />  : <div></div> */ }
      
    </div>
  );
}
