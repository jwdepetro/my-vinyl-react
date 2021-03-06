import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, CssBaseline, Paper, Avatar, Typography, FormControl, Input, InputLabel } from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import Axios from 'axios';
import Link from 'react-router-dom/Link';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    register: {
        marginTop: theme.spacing.unit * 3,
    }
});

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { username: '', password: '' };
    }

    login(e) {
        e.preventDefault();
        const uri = 'http://localhost:5000/api/tokens';
        const options = {
            auth: { username: this.state.username, password: this.state.password }
        };

        Axios
            .post(uri, null, options)
            .then((r) => {
                localStorage.setItem('token', r.data.token);
                this.props.history.push('/')
            })
            .catch((e) => console.log('error', e));
    }

    handleChange = name => event => this.setState({ [name]: event.target.value });

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Login</Typography>
                        <form className={classes.form} onSubmit={(e) => this.login(e)}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={this.handleChange('username')} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange('password')} />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Login
                            </Button>
                        </form>
                        <Typography className={classes.register}>
                            New User? <Link to="/register">Register Here</Link>
                        </Typography>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login);