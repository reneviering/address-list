import React from 'react';

import { Col, Row } from 'reactstrap';

import './ActionBar.css';

const ActionBar = ({ children }) => (
  <div className="action-bar">
    <Row>
      <Col className="text-right">
        { children }
      </Col>
    </Row>
  </div>
);

export default ActionBar;
