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

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps , passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();
    
    const onAccept = () => {  

        let extras = JSON.parse(localStorage.getItem('extras')) || {
            Tipos: [],
            Proteínas: [],
            Salsas: [],
            Complementos: []
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
        
        enqueueSnackbar("Complemento eliminado con éxito", { variant: 'success'});

        passedHook(prev => prev + 1)
        closeModal();
    };

    const onDecline = () => { 
        closeModal();
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Eliminar Complemento </Title> 

                <SubTitle textAlignment="center" paddingLeft='0px'>¿Estás seguro de que deseas eliminar este complemento? <br/> Esta acción es irreversible y no se puede deshacer.</SubTitle>
                
                <Label textAlignment="Center" >Complemento a eliminar: {fullProps.name}</Label>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDish;
