import React from 'react'; 
import '../styles/App.css';

class Recruitment extends React.Component {
    render () {
        return (
            <div className='mainContainer'>
                <div className='rowCentering'>
                    <div className='contentCentering pictureBackground'>
                        <h1>Recruitment</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                    </div>
                </div>    
                    <div className='rowCentering'>
                        <div className='contentCentering'>
                            <h3>Apply Now</h3>
                                <form action="" method='GET'>
                                    <p>Have you held a full and valid UK or EU driving licence for at least one year?</p>
                                    <input type="checkbox" value='licenseToDrive'/><p>yes</p> 
                                    <input type="checkbox" value='licenseToDrive'/><p>no</p>
                                    <p>Have you held a full and valid UK or EU driving licence for at least one year?</p>
                                    <input type="checkbox" value='licenseToDrive'/><p>yes</p> 
                                    <input type="checkbox" value='licenseToDrive'/><p>no</p>
                                    <p>Have you held a full and valid UK or EU driving licence for at least one year?</p>
                                    <input type="checkbox" value='licenseToDrive'/><p>yes</p> 
                                    <input type="checkbox" value='licenseToDrive'/><p>no</p>
                                </form>
                        </div>
                    </div>
                </div> 
        )
    }
}

export default Recruitment;