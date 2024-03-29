import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Banner2 from './banner2.jpg';

import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Img src={Banner2} alt=" Logo" />
      <NavBar>

        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <NavLink to="/search" style={{textDecoration:'none'}}>
          <Button variant="contained" color="secondary" >
            Rechercher
          </Button>
        </NavLink>
        {/*
                <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>

        
        */}
      </NavBar>
    </div>
  );
}

export default Header;
