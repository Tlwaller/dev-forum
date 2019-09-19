import React from 'react';
import {Switch, Route} from 'react-router-dom'
import GuestLanding from './Components/GuestLanding/GuestLanding'
import UserLanding from './Components/UserLanding/UserLanding'
import Posts from './Components/Posts/Posts'

export default (
    <Switch>
        <Route component={GuestLanding} exact path='/'/>
        <Route component={UserLanding} path='/topics'/>
        <Route component={Posts} path='/posts/:topicsId'/>
        <Route render={() => <h1>404 not found</h1>}/>
    </Switch>
)