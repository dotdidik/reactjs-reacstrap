import React from 'react';
import store from 'store';
import isLoggedIn from './helpers/is_logged_in';
import { Redirect } from 'react-router-dom';


export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout = (e) => {
        store.remove('loggedIn');
        this.props.history.push('/login')
    }
    render() {
        if(!isLoggedIn()) {
            return <Redirect to='/login' />
        }
        return(
            <div>
                <h1>login berhasil</h1>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}