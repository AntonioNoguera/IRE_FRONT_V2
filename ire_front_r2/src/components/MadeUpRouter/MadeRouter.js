import Sidebar from '../../components/Sidebar/Sidebar'; 
import '../../mainStyles.css'; 

import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'; 

const MadeRouter = ({routes}) =>{
    return(
        <Router>
            <div className="flex">
            <Sidebar routePages={routes} />

            <Routes>
                {routes.map((pageItem,index) => ( 
                        <Route key = {index} path = {pageItem.path}  exact = {true}  Component = {pageItem.page}/> 
                    ))
                }
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </div>
        </Router>
    )
}

export default MadeRouter;