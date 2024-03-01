import './App.css';
import Button from './Components/Button/button';
import Card from './Components/Card/card';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Introduction from './Components/Introduction/introduction';
import Line from './Components/Line/line';
import Navbar from './Components/Navbar/navbar';
import Services from './Components/Services/services';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Line/>
     <Introduction/>
     <Button/>
     <Line/>
     <Card/>
     <Contact/>
     <Services/>
        
     <Footer/>
    </div>
  );
}

export default App;
