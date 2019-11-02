import React from 'react'; 
import '../styles/App.css';

class Home extends React.Component {
    render () {
        return (
            <div className='mainContainer'>
                <div className='rowCentering'>
                    <div className='contentCentering pictureBackground'>
                    
                        <div><h1>Welcome to Amazon Delivery Service!</h1></div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering'>
                        <h1>Short Description of what we do!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering'>
                        <h1>Nifty Photos describing efficiency!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering'>
                        <h1>Scroll bar with auto nav buttons</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering'>
                        <h1>Twitter/Instagram references and some photos</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;