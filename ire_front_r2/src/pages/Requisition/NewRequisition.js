import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NewRequisitionModal from './requisition.modules/NewRequisitionModal';

const NewRequisition = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <NewRequisitionModal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </div>
    );
}

export default NewRequisition;
