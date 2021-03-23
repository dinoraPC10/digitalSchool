import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getCourse } from "../../redux/actionCreators";
import { Link } from "react-router-dom";

import Banner from "../Organisms/Banner";

const Course = ({ course }) => {
  // Despachar la accion
  useEffect(() => {
    store.dispatch(getCourse(1));
  }, []);

  return (
    <>
      {course && (
        <>
          <Banner
            color="dark-color"
            image={{ src: course.picture, alt: course.name }}
            title={course.name}
            subtitle={course.subtitle}
            courseBanner
            poster={course.picture}
            speciality={course.data.specialities[0].name}
            info={course.information}
          />

          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3>¿Qué aprenderás?</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
                </div>

                <div>
                  <h3>Concocimiento previos</h3>
                  <ul
                    dangerouslySetInnerHTML={{ __html: course.requirements }}
                  />
                </div>
                <div>
                  <h3>Nivel</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {course.data.classes.map((clase) => (
                  <div key={clase.class.id} className="course-class l-section">
                    <h3>{clase.class.title}</h3>
                    <p>{clase.class.description}</p>
                    <ul className="data-list">
                      {clase.subjects.map((element) => (
                        <li key={element.subject.id}>
                          <Link
                            to={`/clase/${element.subject.id}`}
                            className=""
                          >
                            {element.subject.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg-cols-3">
              <h2 className="t3">Profesor</h2>
              <p>Beto Quiroga</p>
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  course: state.courseReducer.course,
});

// conectar al store
export default connect(mapStateToProps, {})(Course);
