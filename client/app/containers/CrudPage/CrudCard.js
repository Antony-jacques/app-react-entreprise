import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Fab from '@material-ui/core/Fab';

import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CrudCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const[newDescription, setNewDescription] = useState("")


  const myName = props.perso.nom;
  const firstLetter = myName.split("")[0];

  const deleteCharacter = (myName)=>{
   Axios.delete('http://localhost:3001/api/delete/ttt' )
    console.log('deleteCharacter');
  }

  const updateDescription = (myName)=>{
    console.log('myName',myName)
    /*
    Axios.put("http://localhost:3001/api/update",{
      characterName:myName, 
      description: newDescription
    });
    setNewDescription("")
    */
   }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {firstLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.perso.nom}
      />
      <CardMedia
        className={classes.media}
        image={props.perso.image}
        title={props.perso.nom}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.perso.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        

        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={()=>{deleteCharacter(myName)}}
      >
        Supprimer
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
        onClick={()=>{updateDescription(myName)}}
      >
        Modifier
      </Button>
        
        
        
      <TextField 
      id="updateInput" 
      label="" 
      onChange={(e)=>{
        setNewDescription(e.target.value)
      }}
       />






        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.perso.nom}:</Typography>
          <Typography paragraph>
          {props.perso.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}