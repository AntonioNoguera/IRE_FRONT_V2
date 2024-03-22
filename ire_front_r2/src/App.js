import './App.css';
import Navbar from './components/Navbar';
import Sidevar from './components/Sidebar'
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar/>
        <Sidevar/>
        <h1>Hello World!</h1>
    </Router>
  );
}

export default App;
