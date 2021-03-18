import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllCourses } from "../../redux/actionCreators";

import Banner from "../Organisms/Banner";
import Card from "../Organisms/Card";

const Courses = ({ courses }) => {
  // Despachar cursos
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, []);

  return (
    <>
      <Banner
        color="first-color"
        image={{
          src:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          alt: "Banner cursos",
        }}
        title="Nuestros Cursos"
        subtitle="Comienza desde cero hoy mismo hoy mismo en tu camino a dominar una tecnología."
      />

      {courses && (
        <main className="ed-grid m-grid-5">
          {courses.map((course) => (
            <Card
              key={course.id}
              picture={course.picture}
              name={course.name}
              cardId={course.id}
              path="cursos"
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courseReducer.courses,
});

// Conectarnos al store
export default connect(mapStateToProps, {})(Courses);
