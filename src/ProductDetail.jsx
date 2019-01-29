import React, { Component } from 'react'
import axios from 'axios';
import AppHeader from './Header';
export default class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            post: ''
        }
    }

    componentDidMount() {
        const ambilid = this.props.match.params.postId
        axios.get(`http://reduxblog.herokuapp.com/api/posts/${ambilid}?key=didik`)
        .then(res => {
            this.setState({ post:res.data })
            console.log('ini data', res.data)
        })
    }

    render() {
        console.log('ini data object', this.props.match.params.postId)
        const ambil = this.state.post;
        return (
            <div>
                <AppHeader />
                <h1>{ambil.title}</h1>
                <img src={ambil.categories} alt="" srcset=""/>
            </div>
        )
    }
}
