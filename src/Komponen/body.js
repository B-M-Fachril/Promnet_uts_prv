import jpg from '../jpeg_source/Cover_face.jpg'
const Body = () => {
    return(
        <div>
            <br></br>
            

           <div className="text_middle">
                <h2 className='text_middle_on'>
                    I n t r o d u c t i o n
                </h2>
                <br></br>
                <img src={jpg} className='img_resize'></img>
                <div className="text_boxes">
                Muhammad Fachril Ramadhan
                <br></br>
                Male
                </div>
           </div>

        </div>
    );
}

export default Body;