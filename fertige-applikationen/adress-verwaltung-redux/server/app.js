'use strict';

const http = require('http');

const express = require('express'),
      bodyParser = require('body-parser'),
      uuid = require('uuidv4'),
      cors = require('cors');

const faker = require('faker');

let addresses = [];

const validateAddress = address => {
  if (!address) return [];
  const errorMessages = [];

  if (!address.firstName) {
    errorMessages.push('firstName is missing.');
  }

  if (!address.lastName) {
    errorMessages.push('lastName is missing.');
  }

  if (!address.email) {
    errorMessages.push('email is missing.');
  }

  return errorMessages;
}

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/addresses', (req, res) => {
  if (req.query.fakeDataAmount && addresses.length !== Number(req.query.fakeDataAmount)) {
    addresses = [];
    for (let i=0; i<Number(req.query.fakeDataAmount); i++) {
      addresses.push({
        id: uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
      })
    }
  }

  res.send(addresses);
});

app.get('/addresses/:addressId', (req, res) => {
  const address = addresses.find(address => address.id === req.params.addressId);

  if (!address) {
    res.status(404);
    return res.end();
  }

  res.send(address);
});

app.post('/addresses', (req, res) => {
  const newAddress = req.body;

  const errorMessages = validateAddress(newAddress);

  if (errorMessages.length) {
    res.status(400);
    return res.send(errorMessages);
  }

  const addressToAdd = {
    ...newAddress,
    id: uuid()
  };

  addresses.push(addressToAdd);

  res.send(addressToAdd);
});

app.put('/addresses/:addressId', (req, res) => {
  const addressId = req.params.addressId;

  const newAddress = req.body;

  const errorMessages = validateAddress(newAddress);
  if (errorMessages.length) {
    res.status(400);
    return res.send(errorMessages);
  }

  const addressToChange = addresses.find(address => address.id === addressId);

  addresses = addresses.map(address => {
    if (address.id !== addressId) return address;

    return {
      ...address,
      ...newAddress
    };
  });

  const updatedAddress = addresses.find(address => address.id === addressId);

  res.send(updatedAddress);
});

app.delete('/addresses/:addressId', (req, res) => {
  const addressId = req.params.addressId;
  const addressToDelete = addresses.find(address => address.id === addressId);

  if (!addressToDelete) {
    res.status(404);
    return res.end();
  }

  addresses = addresses.filter(address => address.id !== addressId);

  res.send(addressToDelete);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
