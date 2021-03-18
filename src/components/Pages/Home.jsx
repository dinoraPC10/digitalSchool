import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllPosts } from "../../redux/actionCreators";

import Banner from "../Organisms/Banner";
import Publication from "../Organisms/Publication";

const Home = ({ posts }) => {
  useEffect(() => {
    store.dispatch(getAllPosts());
  }, []);

  return (
    <>
      <Banner
        color="dark-color"
        title="Bienvenido a la experiencia más increíble en educación online"
        subtitle="Comienza cuando quieras, paga lo que necesites y nunca te detengas."
        image="https://images.unsplash.com/photo-1615976909545-a2d402c7dac3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
        home
        poster="https://edteam-media.s3.amazonaws.com/courses/big/335e838a-0233-4c6b-bef3-768e5cfeb256.png"
      />

      <main className="ed-grid m-grid-3 container">
        {/* Imprimir 4 cursos antes de los dos elementos que tenemos a continuación */}
        <div className="l-section m-cols-2">
          <h2>Últimas publicaciones</h2>
          <div>
            {posts ? (
              <div>
                {" "}
                {posts.map((post) => (
                  <Publication
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    date={post.fecha}
                    content={post.content}
                  />
                ))}{" "}
              </div>
            ) : (
              <p>No se encontraron publicaciones</p>
            )}
          </div>
        </div>

        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li>
              <span>React.js</span>
            </li>
            <li>
              <span>React Native</span>
            </li>
            <li>
              <span>Angular</span>
            </li>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

// Conectamos el store
export default connect(mapStateToProps, {})(Home);
