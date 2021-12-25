import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";


export const ExtLink = ({ to, text }) => {
  return <Link to={to}>{text}</Link>;
};

function Home() {
  const languages = ["english", "french"];
  const [language, setLanguage] = useState(languages[0]);
  const isFrench = (lang) => {
    return lang === "french";
  };
  const changeLanguage = (lang) => {
    lang === languages[0]
      ? setLanguage(languages[1])
      : setLanguage(languages[0]);
  };
  return (
    <div className="home-wrapper ">
      <div className="home">
        <div className="left">
          <img
            className="author-image"
            src={require("./images/yabre.JPG").default}
            alt="Sylvain Yabre in blue suit"
          />
        </div>
        <div className="right">
          {!isFrench(language) ? (
            <section>
              <h2>Welcome to my platform !</h2>

              <p className="intro">
                My name is Sylvain Yabre, I am a second year computer science
                student at the University of British Columbia. This platform
                offers free content revolving around programming languages,
                programming concepts, and software development. Click{" "}
                <ExtLink to={"/about"} text="here" /> to learn more about me, or
                click <ExtLink to={"/projects"} text="here" /> to go to my
                content. Thank you !
              </p>
            </section>
          ) : (
            <section>
              <h2>Bienvenu(e) sur mon site web personnel !</h2>

              <p className="intro">
                Je me nomme Sylvain Yabre, je suis un étudiant en deuxième année
                de science informatique à l'Université de la Colombie
                Britannique au Canada. Cette plateforme vous offre du contenu
                centré sur les langages et concepts de programmation information
                et du developpement web et mobile. Vous pouvez suivre{" "}
                <ExtLink to={"/about"} text="ce lien" />
                pour lire plus à propos de moi ou suivre{" "}
                <ExtLink to={"/projects"} text="ce second lien" /> pour acceder
                au contenu du site. Merci !
              </p>
            </section>
          )}

          <button
            className="btn btn-primary"
            onClick={() => changeLanguage(language)}
          >
            {isFrench(language) ? "English" : "Français"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
