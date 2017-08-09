import { connect } from 'react-redux';
import { getFilteredProducts } from 'state/selectors';
import ProductGrid from '.';

const mapStateToProps = (state) => ({
  products: getFilteredProducts(state),
});

export default connect(mapStateToProps)(ProductGrid);
