import React, { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {
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
    <div className="about">
      <Skills />
      <section className="presentation">
        {!isFrench(language) ? (
          <h1 className="text-3xl text-center">Who am I ?</h1>
        ) : (
          <h1 className="text-3xl text-center">Qui suis-je ?</h1>
        )}
        {!isFrench(language) ? (
          <p>
            I am a second year student studying computer science at the
            University of British Columbia In Vancouver. I am originally from
            Burkina Faso in West Africa, and as one would expect, I speak fluent
            French in addition to English. I did the French curriculum in
            Burkina Faso up to grade 11, then I moved to Singapore and completed
            the International baccalaureate at the United World College of South
            East Asia in Singapore.
          </p>
        ) : (
          <p>
            Je suis étudiant en deuxième année de science informatique a
            l'Université de la Colombie Britannique. Je suis originellement du
            Burkina Faso et comme l'on s'y attendrait, je parle le Français en
            plus de l'Anglais. J'ai étudié le curriculum français au Burkina
            jusqu'en Première D et ensuite, je suis parti faire le BAC
            international à Singapore.{" "}
          </p>
        )}
      </section>
      <section className="hobbies">
        {!isFrench(language) ? (
          <h1 className="text-3xl text-center">What are your hobbies ?</h1>
        ) : (
          <h1 className="text-3xl text-center">Quels sont mes passe-temps ?</h1>
          
        )}
        {!isFrench(language) ? (
          <p>
            In my leisure time I love learning programming languages and
            concepts. I spend most of my time learning web development
            frameworks and libraries. When I am not writing code, I am creating
            and trying my own recipes.
          </p>
          
        ) : (
          <p>
            Quand j'ai du temps libre, j'apprends les langages et concepts de
            programmation . J'investit la majorité de mon temps dans
            l'apprentissage des paradigmes de developpement d'applications. En
            dehors de la programmation, je crée et essaie mes propres récettes.{" "}
          </p>
        )}
      </section>
      <section className="skills">
        {!isFrench(language) ? (
          <div>
            <h1 className="text-3xl text-center">
              What technologies are you learning in 2022 ?
            </h1>
            <p>
              Mobile development: I am currently learning React Native by
              building small applications. I will also learn Flutter in order to choose the better of the two.
              Graphql: I have acquired a strong level of comfort in developing RESTful APIs, now it is my goal to add Graphql to my arsenal of skills.
              Advanced animations: I have recently started looking into MotionJs with the goal of acquiring proficiency in it by the end of next summer.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl text-center">
              {" "}
              Quelles technologies apprenez-vous en 2022 ?
            </h1>
            <p>Development mobile avec React Native et Flutter,Graphql, les animations avec MotionJs</p>
          </div>
        )}
        <a
          className="resume-button"
          href="https://sylvainyabre.github.io/resume/"
        >
          See my resume
        </a>
      </section>

      <button
        onClick={() => changeLanguage(language)}
        className="btn btn-primary lang-button"
      >
        {isFrench(language) ? "English" : "French"}
      </button>
    </div>
  );
}

export default About;
