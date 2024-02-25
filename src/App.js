import './App.css';
import Introduction from './Components/Introduction/introduction';
import Line from './Components/Line/line';
import Navbar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Line/>
     <Introduction/>
    </div>
  );
}

export default App;
