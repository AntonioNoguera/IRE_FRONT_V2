 
import Sidevar from './components/Sidebar/Sidebar'
import './mainStyles.css'
import Home from './pages/Home'
import Sales from './pages/Sales'
import Clients from './pages/Clients'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
        <div className="flex">
          <Sidevar/>
          <Routes>
            <Route path="/" exact = {true} Component={Home}/> 
            <Route path="/sales" exact = {true} Component={Sales}/> 
            <Route path="/clients" exact = {true} Component={Clients}/> 
          </Routes>
          
        </div>
    </Router>
  );
}

export default App;
