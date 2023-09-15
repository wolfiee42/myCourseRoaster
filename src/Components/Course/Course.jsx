const Course = ({course}) => {
    console.log(course);
    const {image} = course  
    return (
        <div>
            <h1>courses</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default Course;