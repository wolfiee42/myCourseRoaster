import PropTypes from 'prop-types';
const Cart = ({ cart }) => {
    const { course_name } = cart
    return (
        <ol>
            <li className="mb-2">{course_name}</li>
        </ol>
    );
};
Cart.propTypes = {
    cart: PropTypes.array
}
export default Cart;