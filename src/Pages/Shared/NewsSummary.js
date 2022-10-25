import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";

const NewsSummary = ({ news }) => {
  const { _id, title, author, details, image_url, total_view, rating } = news;

  console.log(news);
  return (
    <div>
      <Card className="mb-3">
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <Image
              className="border border-dark border-2"
              src={author?.img}
              style={{ height: "50px" }}
              roundedCircle
            ></Image>
            <div className="mt-3">
              <p className="fw-semibold mb-0">{author?.name}</p>
              <p className="fw-semibold">{author?.published_date}</p>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="pb-2">{title}</Card.Title>
          <Card.Img variant="top" src={image_url} className="mb-4" />
          <Card.Text>
            {details.length > 200 ? (
              <p>{details.slice(0, 250) + "...   "}</p>
            ) : (
              <p>{details}</p>
            )}
            <Button variant="primary">
              <Link
                className="text-decoration-none text-white"
                to={`/news/${_id}`}
              >
                Read More
              </Link>
            </Button>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning"></FaStar>
            <span className="ms-1">{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye>
            <span className="ms-1">{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummary;
