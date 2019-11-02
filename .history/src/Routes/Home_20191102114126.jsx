import React from 'react'; 
import '../styles/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Home extends React.Component {
    render () {
        return (
            <div className='homePageMainDiv'>
                <Container>
                <h1>Welcome to Amazon Delivery Service!</h1>

                </Container>  
            </div>
        )
    }
}

export default Home;