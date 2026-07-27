import React from 'react';
import { books, blogs, courses } from './data';
import './App.css';

function App() {
  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>Price: ₹{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  let content;
  if (blogs.isPublished) {
    content = (
      <div>
        <h3>Blog Title: {blogs.title}</h3>
        <p>Author: {blogs.author}</p>
        <span style={{ color: 'green' }}>Status: Published</span>
      </div>
    );
  } else {
    content = <p>Status: Draft (Not Published)</p>;
  }

  const showCourses = true;

  const coursedet = (
    <div>
      {showCourses ? (
        <ul>
          {courses.map((course) => (
            <div key={course.id}>
              <h5>Course: {course.cname}</h5>
              {course.rating && <p>Rating: {course.rating} / 5</p>}
            </div>
          ))}
        </ul>
      ) : (
        <p>No courses available at the moment.</p>
      )}
    </div>
  );

  return (
    <div>
      <div>
        {/* Book Details Section */}
        <div className="st2">
          <h1>Book Details</h1>
          {bookdet}
        </div>

        {/* Blog Details Section */}
        <div className="v1">
          <h1>Blog Details</h1>
          {content}
        </div>

        {/* Course Details Section */}
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>
      </div>
    </div>
  );
}

export default App;
