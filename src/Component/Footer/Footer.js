import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div>
            {/* <Reveal effect="fadeInUp"> */}
            <footer class="footerone">
                <div class="footer1">
                    <h2 class="headertwo">quran</h2>
                        <Slide left>
                            <ul>
                                <li><a href="#">surah fatiha</a></li>
                                <li><a href="#">surah kah'f</a></li>
                                <li><a href="#">surah al-imran</a></li>
                                <li><a href="#">surah nas'r</a></li>
                                <li><a href="#">surah mulk</a></li>
    			            </ul>
                        </Slide>
    		    </div>
                    <div class="footer2">
                        <h2 class="headertwo">salah</h2>
                    <Slide left>
                        <ul>
                            <li><a href="#">fazr salah</a></li>
                            <li><a href="#">zuhor salah</a></li>
                            <li><a href="#">magrib salah</a></li>
                            <li><a href="#">easha- salah</a></li>
                            <li><a href="#">tahazzut salah</a></li>

                        </ul>
                    </Slide>
                    </div>
                    <div class="footer3">
                        <h2 class="headertwo">prayer time</h2>
                        <Slide left>
                        <ul>
                            <li><a href="#">prayer time bangladesh</a></li>
                            <li><a href="#">prayer time london</a></li>
                            <li><a href="#"> prayer time paris</a></li>
                            <li><a href="#">prayer time  america</a></li>
                            <li><a href="#">prayer time australia</a></li>
                        </ul>
                        </Slide>
                    </div>
    	</footer>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p>&copy; 2021 All Rights Reserved By <span>Arifur Rahman</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;