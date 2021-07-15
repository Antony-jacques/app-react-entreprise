import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CardPerso from './CardPerso';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={'auto'} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader
            component="h2"
            style={{ fontSize: '1.5em', textAlign: 'center' }}
          >
            Résultat(s) de votre recherche
          </ListSubheader>
        </GridListTile>
        {/* <Grid container justify="center" spacing={3}></Grid> */}
        {props.persos.map(perso => (
          <Grid
            item
            xs={12}
            sm={4}
            // style={{ display: 'flex', justifyContent: 'center' }}
          >
            <CardPerso perso={perso} />
          </Grid>

          // <GridListTile key={perso.id}>
          //     <CardPerso perso = {perso}/>
          // </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
