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

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

export default function PersonnagesPage() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

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

        const myHook = () => {
          console.log('search.persos', search.persos);
          setSearch({ ...search, persos: apiTab });

          console.log('search apres setSearch', search.persos);
          //console.log('search.persos apres setSearch',search.persos);
        };
        myHook();
      })
      .catch(error => console.log(error)) // erreur json
      .catch(error => console.log(error)); // erreur API
  };

  const handleCheck = e => {
   // console.log('check', search.checked);
    const c = e.target.checked;
    setSearch({ ...search, checked: c });
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
    checked: true,
  };

  const [search, setSearch] = useState(initialsearch);

  // https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook

  return (
    <div>
      <Helmet>
        <title>Personnages Page</title>
        <meta
          name="description"
          content="React - recherche de personnages Marvel"
        />
      </Helmet>
      <Box display="flex" justifyContent="center" m={5}>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </Box>

      {/** **************************************                 GRID              */}

      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            value={search.searchName}
            onChange={e => setSearch({ ...search, searchName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            // il faut mettre handleCallAPIPerso dans une fonction sinon la handleCallAPIPerso est déclenché à chaque fois que le state du boutton est modifié car cela entraine un render
            onClick={() => {
              handleCallAPIPerso(search.searchName);
            }}
          >
            Rechercher
          </Button>
        </Grid>
        <Grid
        item
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <FormControlLabel
          m={5}
            control={
              <Checkbox checked={search.checked} onChange={handleCheck} />
            }
            label="Voir les résultats de la recherche sous forme de cartes"
          />
        </Grid>
      </Grid>

      {/** **************************************                 GRID              */}

      {/*Si la checkbox est true on affiche GridPerso sinon TablePerso */}
      {search.checked ? (
        <GridPerso persos={search.persos} />
      ) : (
        <TablePerso persos={search.persos} />
      )}

      {/** Si on n'a pas de perso on affiche une div vide */}
      {/*search.persos[0] ? <TablePerso persos={search.persos} />  : <div></div> */}
    </div>
  );
}
