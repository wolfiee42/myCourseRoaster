import PropTypes from 'prop-types';
const Cart = ({ cart }) => {
    const { course_name } = cart
    return (
        <div>
            <h3 className="mb-2">{course_name}</h3>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array
}
export default Cart;