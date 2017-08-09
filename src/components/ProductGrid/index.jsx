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
        {},
        { id: PropTypes.number.isRequired },
        ProductCard.propTypes,
      ),
    ),
  ).isRequired,
};

ProductGrid.defaultProps = {
  products: [
    {
      id: 0,
      isOnSale: true,
      isExclusive: false,
      price: '$18.88',
      imgUrl: 'assets/product-1.jpg',
      name: 'Striped shirt',
    },
    {
      id: 1,
      isOnSale: false,
      isExclusive: false,
      price: '$25.44',
      imgUrl: 'assets/product-2.jpg',
      name: 'Denim shirt',
    },
    {
      id: 2,
      isOnSale: false,
      isExclusive: true,
      price: '$12.93',
      imgUrl: 'assets/product-3.jpg',
      name: 'Plain cotton t-shirt',
    },
    {
      id: 3,
      isOnSale: false,
      isExclusive: false,
      price: '$26.32',
      imgUrl: 'assets/product-4.jpg',
      name: 'Plain 3/4 sleeve cotton t-shirt',
    },
    {
      id: 4,
      isOnSale: false,
      isExclusive: false,
      price: '$12.16',
      imgUrl: 'assets/product-5.jpg',
      name: 'White dress shirt',
    },
    {
      id: 5,
      isOnSale: false,
      isExclusive: false,
      price: '$30.27',
      imgUrl: 'assets/product-6.jpg',
      name: 'Long Sleeve Skivvy Top',
    },
    {
      id: 6,
      isOnSale: true,
      isExclusive: false,
      price: '$24.26',
      imgUrl: 'assets/product-7.jpg',
      name: 'Puffer Vest with Hood',
    },
    {
      id: 7,
      isOnSale: false,
      isExclusive: true,
      price: '$17.73',
      imgUrl: 'assets/product-8.jpg',
      name: 'Funnel Neck Swing Top',
    },
  ],
};

export default ProductGrid;
