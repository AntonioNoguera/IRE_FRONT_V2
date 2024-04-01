import { Outlet } from 'react-router-dom'; 

import MainContainer from '../../components/Layouts/MainContainer';

import RouterPath from '../../RouterPaths';
import SubSideBar from '../../components/Sidebar/SubSideBar';

import '../../mainStyles.css'
import PageHolder from '../../components/Layouts/PageHolder';

const Dish = () => {
    //Research in order to delete the hardcode reference
    const paths = RouterPath.find(it => it.name === "Platillos");

    return (
        <PageHolder>
            <SubSideBar content = {paths} />

            <MainContainer>
                <Outlet/>
            </MainContainer>
            
        </PageHolder>
    )
}

export default Dish; 