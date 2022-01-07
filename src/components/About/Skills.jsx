import React from "react";

function Skills() {
  return (<>
    <section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold"> My Technical Skills</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">
            Backend-end Skills
          </h4>
          <div className="space-y-1 leading-tight">
            <p>REST API development</p>
            <p>Databases: MongoDB, Postgres</p>
            <p>NodeJS, ExpressJS </p>
            <p>Django's REST framework</p>
            <p>AWS S3 integration</p>
            <p>JWT Tokens, PassportJS,SSO</p>
            <p>Twilio SendGrid integration</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">Front-end Skills</h4>
          <div className="space-y-1 leading-tight">
            <p>ReactJS</p>
            <p>Full Stack Django Framework</p>
            <p>HTML & CSS</p>
            <p>Redux,ReduxToolkit</p>
            <p>Tailwindcss</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">Developer Tools</h4>
          <div className="space-y-1 leading-tight">
            <p>Git, Github,Jupiter Lab</p>
            <p>Heroku, AWS</p>
            <p>VS Code, PyCharm</p>
            <p>RStudio</p>
            <p> IntelliJ, Postman</p>
          </div>
        </div>
      </div>
    </section>
	<section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold"> My projects</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">
            Brain Arena
          </h4>
          <div className="space-y-1 leading-tight">
            <p>Coming soon</p>
            
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">Credit Card Default Predictor</h4>
          <div className="space-y-1 leading-tight">
            <p>Coming soon</p>
            
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">Full-stack Blog</h4>
          <div className="space-y-1 leading-tight">
            <p>Coming soon</p>
            
          </div>
        </div>
      </div>
    </section>
	</>
  );
}

export default Skills;
