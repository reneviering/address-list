import React from 'react';

import './AddressRow.css';

import {
  Button,
  Table,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class AddressRow extends React.Component {
  handleEditClick = () => {
    this.props.onRequestEditAddress(this.props.address);
  }

  handleDeleteClick = () => {
    this.props.onRequestDeleteAddress(this.props.address);
  }

  handleTableRowClick = () => {
    this.props.onRequestShowAddressDetails(this.props.address);
  }

  render() {
    return (
      <tr onClick={ this.handleTableRowClick } className="address-row">
        <td>{ this.props.address.firstName}</td>
        <td>{ this.props.address.lastName}</td>
        <td>{ this.props.address.email}</td>
        <td className="text-right">
          <UncontrolledButtonDropdown onClick={ e => e.stopPropagation() }>
            <DropdownToggle caret>
              Aktion
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={ this.handleEditClick }>Bearbeiten</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={ this.handleDeleteClick }>Löschen</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </td>
      </tr>
    );
  }
}

export default AddressRow;
