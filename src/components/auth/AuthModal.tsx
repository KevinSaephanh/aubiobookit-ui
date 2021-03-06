import { FC, useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { AuthContext } from "../../store/providers/AuthProvider";
import { useForm } from "react-hook-form";
import InputUtils from "../../shared/utils/InputUtils";
import IFormInput from "../../shared/models/IAuth";
import * as Constants from "../../shared/constants/Constants";
import "./AuthModal.scss";

interface ModalProps {
  show: boolean;
  modalType: string;
  onHide: () => void;
}

const AuthModal: FC<ModalProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const { modalType } = props;
  const auth = useContext(AuthContext);
  const authMessage = Constants.SIGNUP_SUCCESS_MESSAGE;

  const getSignupForm = () => {
    return (
      <div>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            {...register("username")}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
        </Form.Group>
      </div>
    );
  };

  const getLoginForm = () => {
    return (
      <div>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            {...register("username")}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
      </div>
    );
  };

  const onSubmit = (data: IFormInput) => {
    const { username, email, password, confirmPassword } = data;
    if (modalType === "login") {
      const credentials: IFormInput = {
        username,
        password,
      };
      auth.handleLogin(credentials);
      resetForm();
      closeModal();
    }

    if (modalType === "signup") {
      const credentials: IFormInput = {
        username,
        email,
        password,
        confirmPassword,
      };
      resetForm();

      // Toggle signup success message on a timer
      const authMessage = document.querySelector(".auth-message");
      authMessage?.classList.toggle("active");
      setTimeout(() => {
        authMessage?.classList.toggle("active");
      }, 2000);
    }
  };

  // Reset all inputs
  const resetForm = () => {
    reset({ username: "", email: "", password: "", confirmPassword: "" });
  };

  const closeModal = () => {
    resetForm();
    props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalType}
        </Modal.Title>
      </Modal.Header>
      <span className="auth-message">{authMessage}</span>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {modalType === "login" ? getLoginForm() : getSignupForm()}
          <Button
            variant="success"
            type="submit"
            onClick={handleSubmit(onSubmit)}
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
