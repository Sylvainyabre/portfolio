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
      <Skills/>
      <section className="presentation">
        {!isFrench(language) ? <h1>Who am I ?</h1> : <h1>Qui suis-je ?</h1>}
        {!isFrench(language) ? (
          <p>
            I am a second year student studying computer science at the
            University of British Columbia In Vancouver. I am originally from
            Burkina Faso and as one would expect, I speak fluent French in
            addition to English. I did the French curriculum in Burkina Faso
            from grade 1 to 11, then I went to Singapore and did the
            International baccalaureate at the United World College of South
            East Asia in Singapore.
          </p>
        ) : (
          <p>
            Je suis étudiant en deuxième année de science informatique a
            l'Université de la Colombie Britannique. Je suis originellement du
            Burkina Faso et comme l'on s'y attendrait, je parle le Français en
            plus de l"Anglais. J'ai étudié le curriculum français au Burkina
            jusqu'en Première et ensuite, je suis parti faire le BAC
            international à Singapore.{" "}
          </p>
        )}
        
        
      </section>
      <section className="hobbies">
        {!isFrench(language) ? (
          <h1>What are your hobbies ?</h1>
        ) : (
          <h1>Quels sont mes passe-temps ?</h1>
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
          <h1>What are your professional skills ?</h1>
        ) : (
          <h1>Quels sont mes qualités professionnelles ?</h1>
        )}
        <a className ="resume-button"href="https://sylvainyabre.github.io/resume/">See my resume</a>
      </section>
      <button onClick={()=>changeLanguage(language)} className ="btn btn-primary lang-button">{isFrench(language)? "English":"French"}</button>
    </div>
  );
}

export default About;
