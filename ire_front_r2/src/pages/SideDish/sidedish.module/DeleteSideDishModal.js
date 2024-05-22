import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import SubTitle from "../../../components/Layouts/SubTitle";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText';
import BigTextArea from './../../../components/UIcomponents/BigTextArea';

import DropDownSelection from './../../../components/UIcomponents/DropDownSelection';

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps , passedHook }) => {
    // Definición de funciones manejadoras dentro del componente
    const onAccept = () => {
        alert("Le picaste aceptar");

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
                removeExtra('Complementos');
                break;
            default:
                alert(`Tipo original no válido: ${fullProps.typeOption}`);
                return;
        }

        
        localStorage.setItem('extras', JSON.stringify(extras));

        passedHook(prev => prev + 1)
        closeModal(); // Cierra el modal después de aceptar
    };

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
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
