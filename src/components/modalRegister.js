import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalRegister = (props) => {

    return (
        <Modal isOpen={props.show} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>
                {props.title}
            </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.toggle} color="secondary">Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalRegister;