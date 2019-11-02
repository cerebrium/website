import React from 'react'; 
import '../styles/App.css';

class Home extends React.Component {
    render () {
        return (
            <div className='mainContainer'>
                <div className='rowCentering'>
                    <div className='contentCentering1'>
                    
                        <div><h1>Welcome to Amazon Delivery Service!</h1></div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering2'>
                        <h1>Short Description of what we do!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering3'>
                        <h1>Nifty Photos describing efficiency!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering4'>
                        <h1>Scroll bar with auto nav buttons</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
                <div className='rowCentering'>
                    <div className='contentCentering5'>
                        <h1>Twitter/Instagram references and some photos</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, optio cum a ab consequatur blanditiis velit! Ipsam voluptatibus voluptates animi accusamus, possimus quo officiis eos est laboriosam fuga incidunt excepturi.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;