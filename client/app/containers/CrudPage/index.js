/*
 * PersonnagesPage
 *
 * List all the personnages
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import './index.css';

import { useEffect, useState } from 'react';

import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CrudCard from './CrudCard';


import DeleteIcon from '@material-ui/icons/Delete';




const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CrudPage() {
  const classes = useStyles();

  const [characterName, setCharacterName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [characterList, setCharacterList] = useState([]);


  useEffect(() => {
    
    Axios.get('http://localhost:3001/api/get').then((response)=>{ // response designe ce qui est récupéré quand on fait appel à l'url
    setCharacterList(response.data)    })
  },[])

  // requete post avec Axios
const submitCharacter = ()=>{
  Axios.post('http://localhost:3001/api/insert', {characterName:characterName, description: description, image:image}); // on crée un objet auquel on passe les states et qui sera ensuite transmis au back

// ajoute le perso a la liste de personnages
    setCharacterList([...characterList, {nom: characterName, description: description, image:image   }])
}


const deleteCharacter = ()=>{
  Axios.delete(`http://localhost:3001/api/delete/ttt` )
   console.log('deleteCharacter');
 }

console.log('characterName', characterName)
console.log('description', description)
console.log('image', image)










  return (
    <div className="form">
      <h1>Crée ton porpre héros !</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="standard-basic" label="Nom" onChange={(e)=>{setCharacterName(e.target.value)}} />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            variant="outlined"
            label="Descripion"
            onChange={(e)=>{setDescription(e.target.value)}}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            variant="outlined"
            label="url de l'image"
            onChange={(e)=>{setImage(e.target.value)}}
          />
        </div>
        <Button variant="contained" color="primary" onClick={submitCharacter}>
        Envoyer
      </Button>

      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={()=>{deleteCharacter()}}
      >
        Supprimer
      </Button>

      {characterList.map((val)=>{
        return (
          <div>

            {/*
                      <h1>Nom: {val.nom} | Description: {val.description}</h1>

            */}

            <CrudCard perso={val}></CrudCard>

          </div>
          )
      })}


      </form>
    </div>
  );
}
