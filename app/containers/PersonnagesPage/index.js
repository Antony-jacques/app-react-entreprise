/*
 * PersonnagesPage
 *
 * List all the personnages
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import TablePerso from './TablePerso';

import { useEffect, useState } from 'react';

export default function PersonnagesPage() {
  const handleCallAPIPerso = name => {
    // on utilise les bactics pour pouvoir variabiliser l'url avec la variable name en utilisant la synthaxe ${name}
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=168ac8865b5464d4e8ed9e5b2281ba79`;
    //fait un appel au serveur. fetch renvoie une promise
    fetch(url, init)
      //convertit le résultat qui est une chaine de cararactere en un tableau json
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log('data api', data.data.results);

        console.log('initialsearch', search.persos);


        //hook
        
        console.log('initialsearch V2', search.persos);
      })
      .catch(error => console.log(error)) // erreur json
      .catch(error => console.log(error)); // erreur API
  };

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
  };

  // console.log(initialsearch.searchName);

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
      <h2>{search.searchName}</h2>
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
        onClick={()=>{handleCallAPIPerso(search.searchName)}}
      >
        Rechercher
      </Button>
      <Checkbox />
      <TablePerso persos={search.persos} />
    </div>
  );
}
