import './App.css';
import Button from './Components/Button/button';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Introduction from './Components/Introduction/introduction';
import Line from './Components/Line/line';
import Navbar from './Components/Navbar/navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Line/>
     <Introduction/>
     <Button/>
     <Line/>
     <Contact/>
        
     <Footer/>
    </div>
  );
}

export default App;
