import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ArticleCard({ article, profile }) {
  return (
    <>
     
          <Col>
            <Card style={{ height: '600px' }}>
              <Card.Img variant="top" src={article.illustration} />
              <Card.Body>
                <Link to={`/article/${article.id}`}>
                  <Card.Title>{article.title}</Card.Title>
                </Link>
                <img
                  className="rounded-circle article-img"
                  src={profile.image}
                  alt="author of this article"
                />
                <small className="text-muted pub_date">
                  {new Date(article.pub_date).toDateString()}
                </small>
                <hr/>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
    </>
  );
}
