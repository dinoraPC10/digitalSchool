import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getSpeciality } from "../../redux/actionCreators";

import Banner from "../Organisms/Banner";

const Speciality = ({ speciality }) => {
  // Despachando las acciones
  useEffect(() => store.dispatch(getSpeciality(1)), []);

  return (
    <>
      {speciality && (
        <>
          <Banner
            color="dark-color"
            image={{
              src:
                "https://images.unsplash.com/photo-1614089916276-eb5be76854bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
              alt: speciality.data.name,
            }}
            title={speciality.data.name}
            subtitle={speciality.data.subtitle}
            courseBanner
            poster={speciality.data.picture}
            info={speciality.data.information}
          />

          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3>¿Qué aprenderás?</h3>
                  <ul>
                    {speciality.data.abilities.map((ability) => (
                      <li key={ability.id}>{ability.description}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Concocimiento previos</h3>
                  <ul>
                    {speciality.data.knowledge.map((element) => (
                      <li key={element.id}>{element.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
              <h2>Temario de la especialiad</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {speciality.data.courses.map((course) => (
                  <div key={course.id} className="course-class l-section">
                    <div className="ed-grid m-grid-3">
                      <img src={course.picture} alt={course.name} />
                      <div className="m-cols-2">
                        <h3>{course.name}</h3>
                        <p>{course.information}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  speciality: state.specialityReducer.speciality,
});

// Concetar con el store
export default connect(mapStateToProps, {})(Speciality);
