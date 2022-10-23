import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaMedium,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import BrandCarousel from "./BrandCarousel";

const RightNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle>
          <span className="ps-2 pe-1">Sign in with Google</span>
        </Button>
        <Button className="mb-3" variant="outline-dark">
          <FaGithub></FaGithub>
          <span className="ps-2 pe-1">Sign in with Github</span>
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="mb-3">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook>
            <span className="ps-2 pe-1">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter>
            <span className="ps-2 pe-1">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaMedium></FaMedium>
            <span className="ps-2 pe-1">Medium</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube>
            <span className="ps-2 pe-1">Youtube</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaDiscord></FaDiscord>
            <span className="ps-2 pe-1">Discord</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightNav;
