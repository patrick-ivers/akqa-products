import React, { PropTypes } from 'react';
import './styles.scss';

const ProductCard = ({ imgUrl, name, isOnSale, isExclusive, price }) => {
  const baseClass = 'product-card';

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-preview`}>
        <img className={`${baseClass}-preview-image`} src={imgUrl} alt={name} />
      </div>
      <div className={`${baseClass}-tags`}>
        {isOnSale && <div className={`${baseClass}-tag ${baseClass}-tag-sale`}>Sale</div>}
        {isExclusive && <div className={`${baseClass}-tag ${baseClass}-tag-exclusive`}>Exclusive</div>}
      </div>
      <div className={`${baseClass}-details`}>
        <div className={`${baseClass}-details-name`} title={name}>{name}</div>
        <div className={`${baseClass}-details-price`}>{price}</div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnSale: PropTypes.bool,
  isExclusive: PropTypes.bool,
  price: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  isOnSale: false,
  isExclusive: false,
};

export default ProductCard;
