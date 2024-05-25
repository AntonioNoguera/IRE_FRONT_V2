import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import SubTitle from "../../../components/Layouts/SubTitle";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer"; 
import { useSnackbar } from 'notistack'; 
 
const DeleteGroupModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();
    
    const onAccept = () => {
        const groups = JSON.parse(localStorage.getItem('groups') || '[]');
        const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]');
        
        const hasRelatedIngredients = ingredients.some(ingredient => ingredient.groupId === fullProps.id);

        if (hasRelatedIngredients) {
            enqueueSnackbar("No se puede eliminar el grupo porque tiene ingredientes asociados", { variant: 'error' });
            return;
        }

        const filteredGroups = groups.filter(group => group.id !== fullProps.id);
        
        localStorage.setItem('groups', JSON.stringify(filteredGroups));

        enqueueSnackbar("Grupo eliminado correctamente", { variant: 'success' });
        closeModal(); 
        passedHook(prev => prev + 1); 
    };

    const onDecline = () => { closeModal(); };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title>Eliminar Grupo</Title> 
                <SubTitle textAlignment="center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar este Grupo? 
                    <br/> 
                    Esta acción es irreversible y no se puede deshacer.
                </SubTitle>
                <Label textAlignment="center">Grupo a Eliminar: {fullProps.name}</Label>
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Eliminar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default DeleteGroupModal;
