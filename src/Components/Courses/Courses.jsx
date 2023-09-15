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
        <div className="w-3/4">
            <h1 className="text-2xl font-bold text-white">0{courses.length}</h1>
            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;