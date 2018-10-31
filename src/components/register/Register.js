import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { CssBaseline, Paper, Avatar, withStyles, Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
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
    login: {
        marginTop: theme.spacing.unit * 3,
    }
});

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            passowrd: '',
            confirm_password: ''
        }
    }

    register(e) {
        e.preventDefault()
        const uri = 'http://localhost:5000/api/users';

        Axios
            .post(uri, this.state)
            .then(() => this.login())
            .catch((e) => console.log('error', e))
    }

    login() {
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

    handlerChange = name => event => this.setState({ [name]: event.target.value });

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <PermIdentityIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Register</Typography>
                        <form className={classes.form} onSubmit={(e) => this.register(e)}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    onChange={this.handlerChange('username')} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handlerChange('email')} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={this.handlerChange('password')} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    onChange={this.handlerChange('confirm_password')} />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Register
                            </Button>
                        </form>
                        <Typography className={classes.login}>
                            <Link to="/login">Return to Login</Link>
                        </Typography>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Register)