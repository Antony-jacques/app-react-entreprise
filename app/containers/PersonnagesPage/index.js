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

import { useEffect } from 'react';

/*

const handleCallAPIPerso = (name)=>{
  // on utilise les bactics pour pouvoir variabiliser l'url avec la variable name en utilisant la synthaxe ${name}
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=168ac8865b5464d4e8ed9e5b2281ba79`;
  //fait un appel au serveur
  fetch(url)
};

*/
/*
  useEffect(() => {
    fetch(url + songId)
     .then(resp => resp.json())
     .then(data => this.setSong()
    }, [selectedSong])
 */

export default function PersonnagesPage() {
  /* useEffect(  ()=>{
    function myAlrt(){
      alert('fetch hook');
    }
*/

const handleCallAPIPerso = (name)=> {
  // on utilise les bactics pour pouvoir variabiliser l'url avec la variable name en utilisant la synthaxe ${name}
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=168ac8865b5464d4e8ed9e5b2281ba79`;
  //fait un appel au serveur
  fetch(url);
}


//hook qui appelle la fonction responsable de la requete vers l'Api
  useEffect(handleCallAPIPerso('spider'));

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
      <TextField id="standard-search" label="Search field" type="search" />
      <Button variant="contained" color="primary">
        Rechercher
      </Button>
      <Checkbox />
      <TablePerso />
    </div>
  );
}
