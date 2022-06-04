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

        <section className="contianer-skill">
          <div className="contianer max-w-screen-xl mx-auto w-full">
            <h3 className="utils fz-24 fw-700 color-gray-1 mb-20">Skill</h3>
            <div className="grid grid-cols-2 grid-rows-1">
              <div>
                <img src="/assets/imgs/profile-1.webp" alt="Profile" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex">
                  <h3 className="utils fz-18 color-gray-1 fw-600 w-170">
                    Profile
                  </h3>
                  <p className="utils fz-18 color-gray-1">
                    Fullstack Developer
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="mb-5 flex">
                    <h3 className="utils fz-18 color-gray-1 fw-600 w-170">
                      Frontend Dev
                    </h3>
                    <div className="bg-brown-600 w-full utils max-w-445">
                      <div className="utils bg-brown-700 w-96 h-full" />
                    </div>
                  </div>
                  <div className="mb-5 flex">
                    <h3 className="utils fz-18 color-gray-1 fw-600 w-170">
                      Tools
                    </h3>
                    <p className="utils fz-18 color-gray-1">
                      HTML, CSS, JS ,Bootstrap, React, and others.
                    </p>
                  </div>
                  <div className="mb-5 flex">
                    <h3 className="utils fz-18 color-gray-1 fw-600 w-170">
                      Backend Dev
                    </h3>
                    <div className="bg-brown-600 w-full utils max-w-445">
                      <div className="utils bg-brown-700 w-52 h-full" />
                    </div>
                  </div>
                  <div className="flex">
                    <h3 className="utils fz-18 color-gray-1 fw-600 w-170">
                      Tools
                    </h3>
                    <p className="utils fz-18 color-gray-1">
                      Python, Node Js, PHP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-portfolio">
          <div className="contianer max-w-screen-xl mx-auto w-full">
            <h3 className="utils fz-24 fw-700 color-gray-1 mb-20">Portfolio</h3>
            <div className="grid grid-cols-2 grid-rows-1">
              <div>
                <h4 className="utils fz-24 fw-600 color-gray-1 mb-10">
                  UX Research
                </h4>
                <p className="utils max-w-400 fz-18 color-gray-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                  dictum nibh nam odio cursus id. Diam massa semper a tincidunt
                  cursus ultricies lectus eget urna.
                </p>
              </div>

              <div>
                <img src="./assets/imgs/ux-full.webp" alt="Porto" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
