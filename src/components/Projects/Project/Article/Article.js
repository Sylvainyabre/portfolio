import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Article.css";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();


const Article = () => {
  const { articleId } = useParams();

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    axios
      .get(`https://sypartage.herokuapp.com/api/articles/${articleId}/`)
      .then((res) => {
        if (res.statusText === "OK") {
          setArticle(res.data);

          setLoading(false);
        }
      });
  }, [articleId]);

  useEffect(() => {
      console.log(article.author)
    axios
      .get(`https://sypartage.herokuapp.com/api/auth/users/${article.author}/`)
      .then((res) => {
        if (res.statusText === "OK") {
          setAuthor(res.data);
          setLoading(false);
        }
      });
  }, [article.author]);

  const result = htmlToReactParser.parse(article.content);
 
  const articleDisplay = (
    <div className="article_display container">
      <h1>
        <span className="display_title article">{article.title}</span>
      </h1>
      <hr className="title_divider" />
      <div className="signature">
        <h6 className="text-muted">
          <i>Published on {new Date(article.pub_date).toDateString()} by {author.first_name} {author.last_name}</i>
        </h6>
      </div>
      <hr />
      <div className="article-content">{result}</div>
    </div>
  );
  return <div>{loading ? <h4>loading...</h4> : articleDisplay}</div>;
};

export default Article;
