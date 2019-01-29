import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import UserProfile from './UserProfile';
import ProductDetail from './ProductDetail';

export default class Routers extends React.Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/:postId" component={ProductDetail} />
                        <Route path="/login" component={Login} />
                        <Route path="/userprofile" component={UserProfile} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}