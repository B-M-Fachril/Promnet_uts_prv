import meme from '../jpeg_source/meme.png'
const Contact = () => {
    return(
        <div>
            <h2 className="about_header">Contact Us</h2><br></br><br></br>
            <div className="about_kolom_1">
                <div className="kolom_1">
                    <div>
                    <img src={meme} className='img_resize_4'></img> 
                    </div>
                </div>
                <div className="kolom_1">
                <form action="/action_page.php">
                        <label for="email" className='Sub_t_contact'>Email:</label>
                        <input type="text" id="email" name="email" placeholder="example@gmail.com" className="box_input" />
                        <label for="lname"className='Sub_t_contact'>Message:</label>
                        <input type="text" id="lname" name="lname" placeholder="Type your Message Here" className="box_input"/>
                        <input type="submit" value="Submit" />
                        </form> 
                </div>
                    </div>
                    <br></br><br></br>
                    <br></br><br></br>
                </div>
           
    );
}

export default Contact;