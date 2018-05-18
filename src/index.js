import React from 'react';
import ReactDOM from 'react-dom';

import FilterableAddressList from './components/FilterableAddressList';

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    ReactDOM.render(
      <FilterableAddressList addresses={ data } />,
      document.getElementById('root')
    );
  });

/*
- Ursprungsdaten
- Suchtext => STATE
- gefilterte Liste

- Werden Daten über Props übergeben? => kein State
- Lassen sich die Daten auf Grundlage von anderen DAten berechnen? => kein State
- Sind DAten unveränderlich? => kein State

*/
