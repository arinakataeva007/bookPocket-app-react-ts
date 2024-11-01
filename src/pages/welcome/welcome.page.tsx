import React from 'react';
import {Link} from 'react-router-dom';
import './welcome.css';
const WelcomePage = () => {
    return(
        <React.Fragment>
            <section className='welcome-page_section'>
                <div className='section__img-container'>
                    <svg width="1040.009766" height="11.075439" viewBox="0 0 1040.01 11.0754" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line id="Линия 1" x1="0.005371" y1="6.075439" x2="1040.004883" y2="5.000000" stroke="#000000" stroke-opacity="1.000000" stroke-width="10.000000"/>
                    </svg>
                </div>
                <h1 className='section__title title1'>Book</h1>
                <h1 className='section__title title2'>Pocket</h1>
                <div className='section__btn-container'>
                    <Link to="/collection" className='btn-container__btn'>В коллекцию</Link>
                    <Link to="/search" className='btn-container__btn'>Найти книгу</Link>
                </div>
                <div className='section__img-container'>
                    <svg width="1040.009766" height="11.075439" viewBox="0 0 1040.01 11.0754" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line id="Линия 1" x1="0.005371" y1="6.075439" x2="1040.004883" y2="5.000000" stroke="#000000" stroke-opacity="1.000000" stroke-width="10.000000"/>
                    </svg>
                </div>
            </section>
        </React.Fragment>
    )
}
export default WelcomePage;

