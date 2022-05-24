import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <section className="header-1">
          <div className="container max-w-screen-xl mx-auto pt-20">
            <div className="flex justify-between">
              <h1 className="utils color-white-1 fw-700 fz-24">Portofolio</h1>
              <ul className="nav-primary">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skill">Skill</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contanct">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container max-w-screen-xl mx-auto pt-36">
            <h1 className="utils fz-64 color-white-1">
              Hi, It’s Fraza Aditya Wiguna
            </h1>
            <p className="utils fz-24 color-white-1">
              Frontend Developer from Indonesia
            </p>
          </div>
        </section>

        <section className="container-about container max-w-screen-xl mx-auto">
          <div>
            <h3 className="utils fz-24 fw-700 color-gray-1">About</h3>
            <p className="utils fz-18 color-gray-1 mt-16">
              Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero
              phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in
              rutrum augue. Pellentesque senectus risus consectetur et sed purus
              sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla
              egestas odio pharetra egestas aliquet mollis.
            </p>
            <p className="utils fz-18 color-gray-1 mt-5">
              Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam
              penatibus aliquet tellus, in rutrum augue. Pellentesque senectus
              risus consectetur et sed purus sed. Consectetur adipiscing elit.
              Egestas porttitor nulla nulla egestas odio pharetra egestas
              aliquet mollis. diam penatibus aliquet tellus, in rutrum augue.
              Pellentesque.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
