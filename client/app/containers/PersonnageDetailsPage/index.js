/*
 * PersonnagesPage
 *
 * List all the personnages
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
//import H2 from 'components/H2';
import messages from './messages';


import CardPerso from './CardPerso';

import { useEffect, useState } from 'react';

export default function PersonnagesDetailsPage(props) {   // il faut passer props en param pour pouvoir ensuite acceer a match

    //
    const init = {
      method: 'GET',
      headers: myHeader,
      mode: 'cors',
    };
  
    const initialsearch = {
      persos: null,
      serchId : props.match.params.id
    };
    
  //hook qui se declenche quand le compo est monté
  useEffect(() => {
    const handleCallAPIPerso = id => {
      // on utilise les bactics pour pouvoir variabiliser l'url avec la variable name en utilisant la synthaxe ${id}
      const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=168ac8865b5464d4e8ed9e5b2281ba79`;
      //fait un appel au serveur. fetch renvoie une promise
      fetch(url, init)
        //convertit le résultat qui est une chaine de cararactere en un tableau json
        .then(response => response.json())
        .then(json => {
          const data = json;
          const apiTab = data.data.results[0];
          console.log('apiTab', apiTab);
  
          const myHook = ()=>{
            console.log('search avant setSearch',search);
            setSearch({...search, persos: apiTab})
  
            console.log('search apres setSearch',search);
            //console.log('search.persos apres setSearch',search.persos);
          };
          myHook()
        })
        .catch(error => console.log(error)) // erreur json
        .catch(error => console.log(error)); // erreur API
    };
    //on appelle cette f avec les resultats de l'api
    handleCallAPIPerso(props.match.params.id);
  },[]); // le tableau vide fait que la f se declenche seulement au mount



  //Ajoute des param au header de l'appel APi
  const myHeader = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
  });





 
  const [search, setSearch] = useState(initialsearch);

console.log('match', props.match.params.id);



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
      
{ search.persos ?  <CardPerso perso = {search.persos}></CardPerso> : <div></div>}
     
    </div>
  );
}
