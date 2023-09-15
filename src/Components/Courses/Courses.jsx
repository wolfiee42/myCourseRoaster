import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({ handleButton }) => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        coursesInfo()
    }, [])
    const coursesInfo = async () => {
        const response = await fetch('courses.json');
        const data = await response.json();
        setCourses(data);
    }

    return (
        <div className="w-3/4 grid grid-cols-3">
            {
                courses.map(course => <Course handleButton={handleButton} key={course.id} course={course}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleButton: PropTypes.func
}
export default Courses;