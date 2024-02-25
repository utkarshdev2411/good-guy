import './App.css';
import Button from './Components/Button/button';
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
    </div>
  );
}

export default App;
