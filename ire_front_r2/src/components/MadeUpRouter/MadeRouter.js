import Sidevar from '../../components/Sidebar/Sidebar';
import '../../mainStyles.css'; 

import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

import Requisition from '../../pages/Requisition';
import Dishes from '../../pages/Dishes';
import Recipes from '../../pages/Recipes';
import Ingredient from '../../pages/Ingredient';
import Groups from '../../pages/Groups';

const MadeRouter = ({routes}) =>{
    return(
        <Router>
            <div className="flex">
            <Sidevar/>

            <Routes>
                <Route path="/" exact = {true} Component={Requisition}/> 
                <Route path="/platillos" exact = {true} Component={Dishes}/> 
                <Route path="/recetas" exact = {true} Component={Recipes}/> 
                <Route path="/ingredientes" exact = {true} Component={Ingredient}/> 
                <Route path="/grupos" exact = {true} Component={Groups}/> 
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </div>
        </Router>
    )
}

export default MadeRouter;