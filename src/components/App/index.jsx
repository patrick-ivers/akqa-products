import React from 'react';
import HeaderContainer from 'components/Header/container';
import ProductGridContainer from 'components/ProductGrid/container';
import 'reset-css/reset.css';
import './styles.scss';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <ProductGridContainer />
  </div>
);

export default App;
