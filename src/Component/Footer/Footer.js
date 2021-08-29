import React from 'react';
// import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div>
            <div className=''>
                <Slide bottom>
                <p>Islam was revealed in the form of a book, the Holy Quran, to the Holy Prophet Muhammad (P.B.U.H) in the form of revelations through the Angel Jibrail (a.s). This book was not revealed at once to our Holy Prophet, but it was actually revealed in parts; it took 23 years for the complete revelation of the Quran. Muslims follow this book and the teaching of Muhammad (P.B.U.H), as it is the only way to success. The Holy Prophet (P.B.U.H) is regarded as the last prophet of Islam.
                    In reality the Quran is the teacher of Muslims that guides them on how to live a successful life, as per the teachings of Islam. This is the book which helps Muslims to transform their lives as such that they achieve the will of Allah. The Holy Quran, written in a meaningful language, has done a lot more than transform countless lives to help in the areas of emotional distress and worldly pleasures; it has likewise, for nearly 1400 years, lit up day-to-day lives of Muslims using its articulate meaning, connected with adamant monotheism, human self-esteem, virtuous existing, personal obligation and social lives. Pertaining to thousands and thousands, thus, it is the particular individual’s most important power with powering the non-secular, societal and ethical existence. Really, the Quran is the essence of what is the best edifice connected with Islamic civilization that has been created.
                    The content of the Holy Quran was revealed to the Holy Prophet (P.B.U.H), which he then transformed to his followers and the followers of Islam. The first verse of the Quran was revealed to our Prophet in the year 609, and the last one was revealed in the last year of his life – that is, in the year 632. Firstly, Muslims memorize the verses of the Holy Quran and then they jot it down on the instruction of Muhammad (P.B.U.H). The Holy Quran was compiled after the death of the Prophet (P.B.U.H), as the Quran was being revealed to him even during the last year of his life. The arrangement of chapters and verses was according to the guidelines of the Prophet (P.B.U.H). Abu Bakr as-Siddiq is a name worth mentioning, along with Umar ibn Al-Khattab, who played a major part in the collection and arrangement of the Holy Quran. During the rule of the third caliph Uthman ibn Affan, the Quran was written in standard text, distributed in the Islamic world and it was asked that from now on the Quran would be written and read in this script. Interestingly, since then the same script is in use and nothing has changed so far in the Quran or its script.
                    Muslims follow the Quran and its teachings with a true heart, because they know it is the only way to earn heaven and the will of Allah. The original language of the Quran is Arabic but for non-Arabic Muslims, it has been translated into various other languages. These are called translations of the Quran and are developed to facilitate the Muslims.
                    
                    </p>
                    </Slide>
                
            </div>
            {/* <Reveal effect="fadeInUp"> */}
            <footer className="footerone">
                <div className="footer1">
                    <h2 className="headertwo">quran</h2>
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
                    <div className="footer2">
                        <h2 className="headertwo">salah</h2>
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
                    <div className="footer3">
                        <h2 className="headertwo">prayer time</h2>
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