import React, { useEffect, useState } from "react";
import "./Projects.css";
import Project from "../Project";
import axios from "axios";
import ReactPaginate from "react-paginate";


function Projects() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [profile, setProfile] = useState("");
  const articlesPerPage = 4;
  const articlesSeen = pageNumber * articlesPerPage;
  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const pageArticles = articles.slice(
    articlesSeen,
    articlesSeen + articlesPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    axios.get("https://sypartage.herokuapp.com/api/articles/").then((res) => {
      if (res.statusText === "OK") {
        setArticles(res.data);
        setLoading(false);
      }
    });
    //Prism.highlightAll();
  }, []);
  useEffect(() => {
    axios
      .get("https://sypartage.herokuapp.com/api/auth/profiles/1/")
      .then((res) => {
        if (res.statusText === "OK") {
          setProfile(res.data);
          setLoading(false);
        }
      });
  }, []);

  const articlesDisplay = pageArticles.filter((art)=>art.status === "published").map((article) => (
    <Project article={article} key={article.pub_date} profile={profile} />
  ));
  return (
    <div className="projects-wrapper">
      <div className="projects ">
        {loading ? <h2>LOADING... </h2> : <div className ="cards">{articlesDisplay}</div>}
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination-container"
          previousLinkClassName="previous-link"
          nextLinkClassName="next-link"
          disabledClassName="disabled-pagination"
          activeClassName="pagination-active"
        />
      </div>
    </div>
  );
}

export default Projects;
