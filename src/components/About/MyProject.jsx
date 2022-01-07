import React from 'react'

function MyProject() {
    return (
        <section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold "> My projects</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-green-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold ">
            Brain Arena
          </h4>
          <div className="space-y-1 leading-tight">
            <p>This is a prototypes of an online learning platform,</p>
            <p>That I solo-designed and developed.</p>
            <p>I am currently working on the production version.</p>
            <p>This platform will help thousands of students victims of forced displacement in Burkina Faso </p>
            <p>Developed with the MERN stack.</p>
            <p>I Used the Sendgrid API to implement password resetting and communication to users.</p>
            <p>Used New Relic to monitor performance and Tinymce to power advanced content production.</p>
            
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-green-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">Credit Card Default Predictor</h4>
          <div className="space-y-1 leading-tight">
            <p> Tech stack: R, Jupiter Lab, K-nearest Neighbors Algorithm</p>
            <p>We collaborated with 3 classmates on a data science project.</p>
            <p>I was responsible for cleaning and visualizing a real data set of over 30,000 rows using the tidyverse library.</p>
            <p>We used the K-Nearest Neighbors (KNN) classification and the tidymodels library  to predict credit card default.</p>
            <p> I also played a part in writing a scientific report of our work.</p>
            
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-green-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h4 className="my-3 text-3xl font-semibold">Full-stack Blog</h4>
          <div className="space-y-1 leading-tight">
            <p>Tech stack: Python, Django, AWS S3, Postgres</p>
            <p>A personal blog to deliver content focussed on software development.</p>
            <p>Used Ckeditor to power advanced content creation.</p>
            <p>Used AWS S3 buckets to manage static files.</p>
            <p>Serialized the blog posts to offer an external API using the Django REST framework</p>
            
          </div>
        </div>
      </div>
    </section>
    )
}

export default MyProject
