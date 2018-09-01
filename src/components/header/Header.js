import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
                My Vinyl
            </Typography>
        </Toolbar>
    </AppBar>
)

export default Header