import './App.css';
import About from './Components/About/about';
import Button from './Components/Button/button';
import Card from './Components/Card/card';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Introduction from './Components/Introduction/introduction';
import Line from './Components/Line/line';
import Navbar from './Components/Navbar/navbar';
import Results from './Components/Results/results';
import Swiper from './Components/Swiper/swiper';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Line/>
     <Introduction/>
     <Button/>
     <Line/>
<Swiper/>     
     <Contact/>
     <About/>
     <Results/>
     
        
     <Footer/>
    </div>
  );
}

export default App;
