import React from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const ConfirmDeleteAddressModal = ({ isOpen, toggle, address, onConfirm }) => {
  if (!address) return null;

  return (
    <Modal isOpen={ isOpen } toggle={ toggle }>
      <ModalHeader toggle={ toggle }>Adresse wirklich löschen?</ModalHeader>
      <ModalBody>
        <p>
          Möchten Sie folgende Adresse wirklich löschen?
        </p>
        <p>
          <strong>
            { address.firstName } { address.lastName } { address.email }
          </strong>
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={ () => onConfirm(address) }>Löschen</Button>{' '}
        <Button color="secondary" onClick={ toggle }>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default ConfirmDeleteAddressModal;
