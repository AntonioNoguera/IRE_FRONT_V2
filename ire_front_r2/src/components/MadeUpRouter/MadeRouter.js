import Sidebar from '../../components/Sidebar/Sidebar';
import '../../mainStyles.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const RenderRoutes = ({ routes }) => {
    return routes.map((route, index) => {
        if (route.children) {
            return (
                <Route key={index} path={route.path} element={<route.page />}>
                    {/* Si la ruta tiene un componente para index, úsalo. De lo contrario, redirige. */}
                    {route.indexComponent ? (
                        <Route index element={<route.indexComponent />} />
                    ) : (
                        <Route index element={<Navigate to={route.defaultPath} replace />} />
                    )}

                    {route.children.map((childRoute, childIndex) => (
                        <Route key={childIndex} path={childRoute.path} element={<childRoute.page />} />
                    ))}
                </Route>
            );
        } else {
            return <Route key={index} path={route.path} element={<route.page />} />;
        }
    });
};

const MadeRouter = ({ routes }) => {
    return (
        <Router>
            <div className="flex">
                <Sidebar routePages={routes} />

                <Routes>
                    {RenderRoutes({ routes })}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
};

export default MadeRouter;