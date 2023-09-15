import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const CartSection = ({ carts, credits, remainingCredit }) => {
    return (
        <div className="w-1/4 bg-white mx-2 mt-2 mb-5 p-3 rounded-lg shadow-md">
            <div className="border-b-2 py-3">
                <h3 className="text-sky-600 font-semibold text-lg">Credit Hour Remaining : {remainingCredit}</h3>
            </div>
            <h3 className="text-xl font-bold mt-2 mb-5">Course Name</h3>
            <div className="border-b-2  pb-5 mb-5">
                {
                    carts.map((cart, ind) => <Cart key={ind} ind={ind} cart={cart}></Cart>)
                }
            </div>
            <div className="my-2">
                <p>Total Credit Hour : {credits}</p>
            </div>
        </div>
    );
};
CartSection.propTypes = {
    carts: PropTypes.array,
    credits: PropTypes.array,
    remainingCredit: PropTypes.array
}
export default CartSection;