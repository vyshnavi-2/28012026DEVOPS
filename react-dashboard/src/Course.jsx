function Course() {
  return (
    <div className="course-section">
      <h2>Available Courses</h2>

      <div className="course-list">
        <div className="course-card">
          <h3>React Basics</h3>
          <p>Duration: 6 Weeks</p>
          <p>Level: Beginner</p>
        </div>

        <div className="course-card">
          <h3>Data Structures & Algorithms</h3>
          <p>Duration: 10 Weeks</p>
          <p>Level: Intermediate</p>
        </div>

        <div className="course-card">
          <h3>Machine Learning</h3>
          <p>Duration: 8 Weeks</p>
          <p>Level: Intermediate</p>
        </div>

        <div className="course-card">
          <h3>Web Development</h3>
          <p>Duration: 12 Weeks</p>
          <p>Level: Beginner to Advanced</p>
        </div>
      </div>
    </div>
  );
}

export default Course;

