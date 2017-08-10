import { connect } from 'react-redux';
import { getProducts } from 'state/selectors';
import ProductGrid from '.';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export default connect(mapStateToProps)(ProductGrid);
