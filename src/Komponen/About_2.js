import diamond from '../jpeg_source/Diamond.png'
import club from '../jpeg_source/Club.png'

const About_2 = () => {
    return(
        <div>
            <div className="about_kolom">
                <div className="kolom">
                    <div>
                    <img src={diamond} className='img_resize_3'></img>
                    </div>
                </div>
                <div className="kolom">
                <div>
                        <h3>
                        <div class="flip-box">
                                <div class="flip-box-inner">
                                     <div class="flip-box-front">
                                        <h2 className='margin_text'>NIM</h2>
                                    </div>
                                    <div class="flip-box-back">
                                        <h2 className='margin_text_2'>2202472</h2>
                                     </div>
                                </div>
                            </div>
                        </h3>
                        
                    </div>
                </div>
                <div className="kolom">
                <div>
                        <h3>
                           <img src={club} className='img_resize_3'></img>
                        </h3>
                        
                    </div>
                </div>
                <div className="kolom">
                <div>
                        <h3>
                        <div class="flip-box">
                                <div class="flip-box-inner">
                                     <div class="flip-box-front">
                                        <h2 className='margin_text'>Age</h2>
                                    </div>
                                    <div class="flip-box-back">
                                        <h2 className='margin_text'>20 Years old</h2>
                                     </div>
                                </div>
                            </div>
                        </h3>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_2;