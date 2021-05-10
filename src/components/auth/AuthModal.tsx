import React, { ChangeEvent, MouseEvent, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import InputUtils from "../../utils/InputUtils";
import "./AuthModal.scss";

const AuthModal = (props: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { modalType } = props;

  const getSignupForm = () => {
    return (
      <div>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            type="text"
            minLength={5}
            maxLength={20}
            placeholder="Enter username"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            minLength={7}
            maxLength={50}
            placeholder="Enter email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            minLength={7}
            maxLength={100}
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={confirmPassword}
            type="password"
            minLength={7}
            maxLength={100}
            placeholder="Confirm password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
        </Form.Group>
      </div>
    );
  };

  const getLoginForm = () => {
    return (
      <div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            minLength={7}
            maxLength={50}
            placeholder="Enter email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            minLength={7}
            maxLength={100}
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </Form.Group>
      </div>
    );
  };

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const validateForm = () => {};

  // Check if all form fields are filled; if not, disable button
  const isButtonDisabled = () => {
    if (modalType === "login") {
      return email === "" || password === "";
    } else {
      return (
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      );
    }
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const closeModal = () => {
    resetForm();
    props.onHide();
  };

  console.log(InputUtils.hasBadWord("B1111tch duck me"));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalType}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {modalType === "login" ? getLoginForm() : getSignupForm()}
          <Button
            variant="success"
            type="submit"
            onClick={(e: MouseEvent<HTMLElement>) => handleSubmit(e)}
            disabled={isButtonDisabled()}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => closeModal()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
