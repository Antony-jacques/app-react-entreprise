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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
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

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const myName = props.perso.name;
  const firstLetter = myName.split("")[0];
 // console.log('myName',firstLetter);
//console.log('card  props.perso.name', props.perso.name);
  return (
 
      <div>

{/** si un personnage est passé au composant */}
{ props.perso ? 
    
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
      title={props.perso.name}
      subheader={props.perso.modified}
    />
    <CardMedia
      className={classes.media}
      image={props.perso.thumbnail.path + '.' + props.perso.thumbnail.extension}
      title={props.perso.name}
      style ={ {backgroundPosition: 'center'}}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
      {props.perso.description ? props.perso.description : <div>There are no description for this character at the moment.</div> }
      </Typography>
    </CardContent>
    {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
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
      {props.perso.description}
      </CardContent>
    </Collapse> */}
  </Card>

    
    : <div></div> }




      </div>
  );
}