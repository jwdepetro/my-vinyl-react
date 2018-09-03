import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography, withStyles, Divider, List, Hidden, Drawer, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    state = { open: false };

    toggle = () => this.setState({ open: !this.state.open });

    render() {

        return (
            <div>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.toggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            My Vinyl
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} anchor="left">
                    <Link to='/' onClick={this.toggle}>
                        <ListItem button>
                            <ListItemText primary="My Vinyl" />
                        </ListItem>
                    </Link>
                    <Link to='/records' onClick={this.toggle}>
                        <ListItem button>
                            <ListItemText primary="Showcase" />
                        </ListItem>
                    </Link>
                    <Link to='/users' onClick={this.toggle}>
                        <ListItem button>
                            <ListItemText primary="Community" />
                        </ListItem>
                    </Link>
                    <Link to='/login' onClick={this.toggle}>
                        <ListItem button>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Link>
                </Drawer>
            </div>
        )
    }
}

export default Header;