import React, { useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";
import store from "../../redux/store";
import { getCourse, getFragment } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Fragment = ({ fragment, course }) => {
  useEffect(() => {
    store.dispatch(getCourse(1));
    store.dispatch(getFragment(123));
  }, []);

  return (
    <div className="class-page-container background dark-color s-pxy-4">
      {fragment && course && (
        <section className="ed-grid lg-grid-12">
          <div className="lg-cols-8">
            <div>
              <Vimeo video={fragment.video} width={500} />
            </div>
            <div>
              <h2 className="s-mb-0 color accent-color">{fragment.name}</h2>
              <span className="color light-color">{course.name}</span>
            </div>
          </div>

          <div className="lg-cols-4">
            <div>
              <h2 className="color accent-color">Temario del curso</h2>
              {course.data.classes.map((fragment) => (
                <div className="course-class l-section" key={fragment.class.id}>
                  <h3 class="color accent-color"> {fragment.class.title} </h3>

                  <ul className="data-list">
                    {fragment.subjects.map((element) => (
                      <li key={element.subject.id}>
                        <Link
                          to={`/clase/${element.subject.id}`}
                          className="color light-color"
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
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fragment: state.fragmentReducer.fragment,
  course: state.courseReducer.course,
});

// Conectar el store
export default connect(mapStateToProps, {})(Fragment);
