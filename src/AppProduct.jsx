import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import axios from 'axios';
import { Link } from 'react-router-dom';
class AppProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            posts: []
        }
    }

    componentDidMount(){
        axios.get('http://reduxblog.herokuapp.com/api/posts?key=didik')
        .then(res => {
            this.setState({ posts:res.data })
            console.log('ini data', res.data)
        })
    }

    render() {
        console.log('ini data dari state', this.state.posts)
        return (
            <div>
                <Container>
                    <Row className='d-flex'>
                        {
                            this.state.posts.map((post, index)=>
                            <Col md='4' key={index}>
                                <Card>
                                    <CardImg top width="100%" src={post.categories} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>{post.title}</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>{post.content}</CardText>
                                    <Button><Link to={`/${post.id}`}>Lihat detail</Link></Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AppProduct;