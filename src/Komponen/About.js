import Profil from '../jpeg_source/Cover_face.jpg'
import heart from '../jpeg_source/Heart.png'
import spade from '../jpeg_source/Spade.png'

const About = () => {
    return(
        <div className='text_middle_on'>
            <h2 className="about_header">ABOUT</h2><br></br>
            <div className="about_kolom">
                <div className="kolom">
                    <div>
                        <h3>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                     <div class="flip-box-front">
                                        <h2 className='margin_text'>Photo</h2>
                                    </div>
                                    <div class="flip-box-back">
                                        <img src={Profil} className='img_resize_2'></img>
                                     </div>
                                </div>
                            </div>
                        </h3>
                        
                    </div>
                </div>
                <div className="kolom">
                    <div>
                    <img src={heart} className='img_resize_3'></img> 
                    </div>
                </div>
                <div className="kolom">
                <div>
                        <h3>
                        <div class="flip-box">
                                <div class="flip-box-inner">
                                     <div class="flip-box-front">
                                        <h2 className='margin_text'>Name</h2>
                                    </div>
                                    <div class="flip-box-back">
                                        <h2 className='margin_text_2'>Muhammad Fachril Ramadhan</h2>
                                     </div>
                                </div>
                            </div>
                        </h3>
                        
                    </div>
                </div>
                <div className="kolom">
                <div>
                        <h3>
                            <img src={spade} className='img_resize_3'></img>
                        </h3>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;