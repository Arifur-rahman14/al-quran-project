import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';
import Reveal from 'react-reveal/Reveal';
import '../Banner/Banner.css';

const Banner = () => {
    return (
        <>
        <div className='header-name'>
            
            <div className="logosiding1">
                <Bounce left cascade>
                    <h1>the holy quran</h1>
                    <main class="content">
                        <div class="details">
                            <p>Start reading the Quran Online! Listen to beautiful audio recitations, read the Quran translation in your desired language and explore the Holy Book in a fast and mobile-friendly interface.</p>
                        </div>
                    </main>
                </Bounce>
            </div>
            <Pulse>
            <div className="logosiding">
                <img src="../../images/logotwo.png" height="180px" width="400px"></img>
    	    </div>
            </Pulse>
            </div>
            
        </>
    );
};

export default Banner;