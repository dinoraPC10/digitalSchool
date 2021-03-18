import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSpecialities } from "../../redux/actionCreators";
import store from "../../redux/store";

import Banner from "../Organisms/Banner";
import Card from "../Organisms/Card";

const Specialities = ({ specialities }) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities());
  }, []);

  return (
    <>
      <Banner
        color="second-color"
        image={{
          src:
            "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          alt: "Banner especialidades",
        }}
        title="Especialidades"
        subtitle="Domina una tecnología con las rutas de aprendizaje que te proponemos"
      />

      {specialities && (
        <main className="ed-grid m-grid-3">
          {specialities.map((speciality) => (
            <Card
              picture={speciality.picture}
              name={speciality.name}
              key={speciality.id}
              cardId={speciality.id}
              path="especialidades"
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  specialities: state.specialityReducer.specialities,
});

// Conectar con el store
export default connect(mapStateToProps, {})(Specialities);
