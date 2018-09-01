import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { CssBaseline } from '@material-ui/core';

class Login extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {username: '',password: ''};
    }

    login(e)
    {
        e.preventDefault();
        var uri = 'http://localhost:5000/api/tokens';
        var options = {
            auth: {username: this.state.username, password: this.state.password}
        };
        
        axios
            .post(uri, null, options)
            .then((r) => console.log('token', r.data.token))
            .catch((e) => console.log('error', e));
    }

    handleChange = name => event => this.setState({[name]: event.target.value});

    styles = theme => ({
        layout: {
            width: 'auto',
            display: 'block', // Fix IE11 issue.
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
        form: {
            width: '100%', // Fix IE11 issue.
            marginTop: theme.spacing.unit,
        },
        submit: {
            marginTop: theme.spacing.unit * 3,
        }
    });

    render() 
    {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={this.styles.layout}>
                    <Paper className={this.styles.paper}>
                        <form className={this.styles.form} onSubmit={(e) => this.login(e)}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input 
                                    id="username" 
                                    name="username" 
                                    autoComplete="username" 
                                    onChange={this.handleChange('username')} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange('password')}/>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={this.styles.submit}>
                                Login
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}

export default Login