import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Card, CardContent } from '@material-ui/core';
import Axios from 'axios';

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
        return (
            <Card>
                <CardContent>
                    <form onSubmit={(e) => this.login(e)}>
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
                                onChange={this.handleChange('password')} />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="raised"
                            color="primary">
                            Login
                    </Button>
                    </form>
                </CardContent>
            </Card>
        )
    }
}

export default Login;