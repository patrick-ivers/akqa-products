import React from 'react';
import Header from 'components/Header';
import ProductGrid from 'components/ProductGrid';
import 'reset-css/reset.css';
import './styles.scss';

const App = () => (
  <div className="app">
    <Header />
    <ProductGrid />
  </div>
);

export default App;
