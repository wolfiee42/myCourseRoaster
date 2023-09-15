import PropTypes from 'prop-types';
const Cart = ({ cart, ind }) => {
    const { course_name } = cart
    return (
        <div>
            <h3 className="mb-2">{ind + 1} {course_name}</h3>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array,
    ind: PropTypes.number
}
export default Cart;