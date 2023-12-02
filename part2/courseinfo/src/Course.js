const Course = (props) => {
    const { courses } = props;
  
    
  
    return (
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <h1>{course.name}</h1>
            {course.parts.map((part) => (
              <div key={part.id}>
                <p>
                  {part.name} {part.exercises}
                </p>
              
              </div>
              
            ))}
            <strong>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong>
          </div>
        ))}
      
      </div>
    )
}

  export default Course