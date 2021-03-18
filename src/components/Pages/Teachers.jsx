import React, { useEffect } from "react";
import store from "../../redux/store";
import { getAllTeachers } from "../../redux/actionCreators";
import { connect } from "react-redux";

import Banner from "../Organisms/Banner";
import Teacher from "../Organisms/Teacher";

const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match]);

  return (
    <>
      <Banner
        color="second-color"
        image={{
          src:
            "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          alt: "Banner Profesores",
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente esta altamente calificado para guiarte en tu carrera"
      />
      {teachers && (
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {teachers.map((teacher) => (
            <Teacher
              key={teacher.id}
              picture={teacher.picture}
              name={teacher.name}
              country={teacher.country}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  teachers: state.teacherReducer.teachers,
});

// Acceder al store conectando al componente
export default connect(mapStateToProps, {})(Teachers);
