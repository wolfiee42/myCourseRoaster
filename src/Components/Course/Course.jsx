import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Course = ({ course, handleButton }) => {

    const { image, course_name, details, price, credit_hours } = course
    return (
        <div className="p-3 bg-white m-2 rounded-lg shadow-md">
            <img className="w-ful" src={image} alt="" />
            <h3 className="font-semibold py-2">{course_name}</h3>
            <p className="pb-2"><small>{details}</small></p>
            <div className="flex justify-between">
                <div className='flex items-center gap-1'>
                    <FaDollarSign></FaDollarSign>
                    <p>Price: {price}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <FaBookOpen></FaBookOpen>
                    <p>Credit : {credit_hours}hr</p>
                </div>

            </div>
            <button onClick={() => handleButton(course, credit_hours)} className='bg-sky-600 w-full text-white p-2 rounded-lg mt-6 hover:bg-sky-500'>Select</button>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.array,
    handleButton: PropTypes.func
}
export default Course;