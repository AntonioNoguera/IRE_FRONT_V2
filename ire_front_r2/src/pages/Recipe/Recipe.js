import { Outlet } from 'react-router-dom'; 

import MainContainer from '../../components/Layouts/MainContainer';

import RouterPath from '../../RouterPaths';
import SubSideBar from '../../components/Sidebar/SubSideBar';
import PageHolder from '../../components/Layouts/PageHolder';


import '../../mainStyles.css'

const Recipe = () => {
    //Research in order to delete the hardcode reference
    const paths = RouterPath.find(it => it.name === "Recetas");

    return (
        <>
        <SubSideBar content = {paths} />
            <PageHolder>
                
                <MainContainer>
                    <Outlet/>
                </MainContainer>
                
            </PageHolder>
        </>
    )
}

export default Recipe; 