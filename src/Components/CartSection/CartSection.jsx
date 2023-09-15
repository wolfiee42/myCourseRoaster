import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const CartSection = ({ carts }) => {

    return (
        <div className="w-1/4 bg-white mx-2 my-5 p-3 rounded-lg shadow-md">
            <h3 className="text-xl font-bold my-5">Course Name</h3>
            <div>
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            </div>
        </div>
    );
};
CartSection.propTypes ={
    carts : PropTypes.array
}
export default CartSection;