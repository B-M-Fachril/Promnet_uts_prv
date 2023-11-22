import Nav from "./Nav"; 
import Body from './body';
import Footer from './Footer';
import About from './About';
import About_2 from './About_2';
import Contact from './Contact';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <header>
            </header>
        <body className='wpp_1'>
            <Body />
        </body>
        <footer>
        </footer>
    </div>
    );
}

export default Home;