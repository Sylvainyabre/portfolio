import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import "./prism.css";



function Project(props) {
  return (
    
      <div className="card unit-article">
        
          <img
            className="card-img-top"
            src={props.article.illustration}
            alt="Illustration"
          />

          <div className="card-body">
            
              <Link to="/about">
                <img
                  className="rounded-circle article-img"
                  src={props.profile.image}
                  alt="author of this article"
                />
              </Link>
              <small className="text-muted pub_date">
              {new Date(props.article.pub_date).toDateString()}
            </small>

            <Link to={`/article/${props.article.id}`}>
              <h4 className="card-title">{props.article.title}</h4>
            </Link>
            <p className="card-text description">{props.article.description}</p>
            <Link
              to={`/article/${props.article.id}`}
              className="btn btn-primary article-button"
            >
              See article
            </Link>
          </div>
        </div>
      
   
  );
}

export default Project;
