import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../login/Login'
import Users from '../users/Users'
import User from '../user/User'
import Records from '../records/Records'
import Register from '../register/Register';
import Record from '../record/Record';
import MyVinyl from '../my-vinyl/MyVinyl';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MyVinyl}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/records' component={Records}/>
            <Route exact path='/record/:id' component={Record}/>
            <Route exact path='/users' component={Users}/>
            <Route exact path='/user/:username' component={User}/>
            <Route exact path='/register' component={Register}/>
        </Switch>
    </main>
)

export default Main