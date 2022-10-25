import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName);

  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          type="text"
          placeholder="User Name"
          defaultValue={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          ref={photoURLRef}
          placeholder="Photo URL"
          defaultValue={user?.photoURL}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default Profile;
