import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import SubTitle from "../../../components/Layouts/SubTitle";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer"; 

import { useSnackbar } from 'notistack'; 

const optionsTypes = [
    { name: "Tipos", value: "Tipos" },
    { name: "Proteínas", value: "Proteínas" },
    { name: "Salsas", value: "Salsas" },
    { name: "Acompañamientos", value: "Acompañamientos" }
];

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps , passedHook }) => {

    console.log(fullProps);
    const { enqueueSnackbar } = useSnackbar();

    const noColateral = () => {
        const platillos = JSON.parse(localStorage.getItem('dishes')) || [];
        const complementId = fullProps.id;
        const complementType = fullProps.typeOption;

        return !platillos.some(platillo => {
            switch (complementType) {
                case 'Tipos':
                    return platillo.typeId === complementId;
                case 'Proteínas':
                    return platillo.proteinId === complementId;
                case 'Salsas':
                    return platillo.sauceId === complementId;
                case 'Acompañamientos':
                    return platillo.complementId === complementId;
                default:
                    return false;
            }
        });
    };

    const onAccept = () => { 
        if(noColateral()) {
            let extras = JSON.parse(localStorage.getItem('extras')) || {
                Tipos: [],
                Proteínas: [],
                Salsas: [],
                Acompañamientos: []
            };
    
            const removeExtra = (type) => {
                const index = extras[type].findIndex(item => item.id === fullProps.id);
                if (index !== -1) {
                    extras[type].splice(index, 1);
                }
            };
    
            switch (fullProps.typeOption) {
                case 'Tipos':
                    removeExtra('Tipos');
                    break;
                case 'Proteínas':
                    removeExtra('Proteínas');
                    break;
                case 'Salsas':
                    removeExtra('Salsas');
                    break;
                case 'Acompañamientos':
                    removeExtra('Acompañamientos');
                    break;
                default:
                    alert(`Tipo original no válido: ${fullProps.typeOption}`);
                    return;
            }
    
            localStorage.setItem('extras', JSON.stringify(extras));
            
            enqueueSnackbar("Complemento eliminado con éxito", { variant: 'success' });
    
            passedHook(prev => prev + 1);
            closeModal();
        } else {
            enqueueSnackbar("Este complemento está siendo usado en uno o más platillos y no se puede eliminar", { variant: 'error' });
        }
    };

    const onDecline = () => { 
        closeModal();
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Eliminar Complemento </Title> 

                <SubTitle textAlignment="center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar este complemento? <br/> Esta acción es irreversible y no se puede deshacer.
                </SubTitle>
                
                <Label textAlignment="center">
                    Complemento a eliminar: {fullProps.name}
                </Label>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Eliminar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDish;
