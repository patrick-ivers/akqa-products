import omit from 'lodash.omit';
import React, { PropTypes } from 'react';
import ProductCard from 'components/ProductCard';
import './styles.scss';

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        {...omit(product, ['id'])}
      />
    ))}
  </div>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(
      Object.assign(
        { id: PropTypes.number.isRequired },
        ProductCard.propTypes,
      ),
    ),
  ).isRequired,
};

export default ProductGrid;
