import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";

const Courses = () => {

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
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;