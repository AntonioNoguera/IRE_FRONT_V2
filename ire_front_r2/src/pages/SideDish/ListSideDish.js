import React, { useEffect, useState } from 'react';

import "./sidedish.module/complementHolder.css";

import CenteredDisplay from "./../../components/Layouts/CenteredDisplay"; 

import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import SvgButton from "../../components/UIcomponents/SvgButton";
import MotionImplementation from './../../components/Layouts/MotionImplementation';
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import UpdateSideDishModal from "./sidedish.module/UpdateSideDishModal";
import DeleteSideDishModal from "./sidedish.module/DeleteSideDishModal";

const ComplementItem = ({ fullSideDish, typeOfComplement, passedHook }) => {
    fullSideDish.typeOption = typeOfComplement;

    return (
        <HorizontalDisplay 
            justifyDirection="start" 
            width="auto"  
            classNameSend="complementItemHolder">

            <p className="complementNameHolder">
                {fullSideDish.name}
            </p>

            <SvgButton 
                size='30px' 
                styleName='dark' 
                type='editCookie'
                fullProps={fullSideDish}
                hook={passedHook}
                RenderedComponent={UpdateSideDishModal}
            />

            <SvgButton 
                size='30px' 
                styleName='dark' 
                type='trashCan' 
                hook={passedHook}
                fullProps={fullSideDish}
                RenderedComponent={DeleteSideDishModal}
            />
        </HorizontalDisplay>
    );
}

const backgroundItemColors = ['#009FE3', '#1D7093'];

const TopComplementHolder = ({ name, items, classValue = 'complementHolder', backgroundItem = '#B89554', fatherHook, keyValue }) => {
    return (
        <div className={classValue} style={{ backgroundColor: backgroundItem }}>
            <CenteredDisplay width="100%">
                <p className='complementTitle'> {name} </p>
            </CenteredDisplay>

            {
                items && items.length > 0 ? (
                    items.map((item, index) => (
                        <ComplementItem
                            typeOfComplement={keyValue}
                            key={item.id}
                            fullSideDish={item}
                            passedHook={fatherHook}
                        />
                    ))
                ) : (
                    <>
                        <hr />
                        <div className='noHaySide'>No hay elementos disponibles</div>
                    </>
                )
            }
        </div>
    );
}

const ListSideDish = () => {
    const [extraList, setExtraList] = useState({});
    const [updateTrigger, setUpdateTrigger] = useState(0);

    useEffect(() => {
        let storedExtras = JSON.parse(localStorage.getItem('extras'));

        if (!storedExtras) {
            storedExtras = {
                Tipos: [],
                Proteínas: [],
                Salsas: [],
                Acompañamientos: []
            };
            localStorage.setItem('extras', JSON.stringify(storedExtras));
        }

        setExtraList(storedExtras);
    }, [updateTrigger]);

    return (
        <MotionImplementation>
            <WhiteDummySpacer />
            <Title> Listado de Complementos </Title>

            <TopComplementHolder
                classValue="typesHolder"
                key="Tipos"
                keyValue="Tipos"
                name="Tipos de Platillo"
                fatherHook={setUpdateTrigger}
                items={extraList.Tipos}
            />

            <HorizontalDisplay>
                {
                    Object.entries(extraList).map(([key, value], index) => (
                        key !== "Tipos" && (
                            <TopComplementHolder
                                key={key}
                                keyValue={key}
                                name={key}
                                items={value}
                                backgroundItem={backgroundItemColors[index % 2]}
                                fatherHook={setUpdateTrigger}
                            />
                        )
                    ))
                }
            </HorizontalDisplay>
        </MotionImplementation>
    );
}

export default ListSideDish;
