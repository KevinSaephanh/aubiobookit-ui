import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useState,
  useContext,
} from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { AuthContext } from "../../store/providers/AuthProvider";
import { useForm } from "react-hook-form";
import "./AuthModal.scss";
import InputUtils from "../../utils/InputUtils";

interface ModalProps {
  show: boolean;
  modalType: string;
  onHide: () => void;
}

interface IFormInput {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const AuthModal: FC<ModalProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();
  const auth = useContext(AuthContext);
  const { modalType } = props;

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
      </div>
    );
  };

  const onSubmit = (data: IFormInput) => {
    console.log("DATA: " + JSON.stringify(data));
    console.log("VALID: " + InputUtils.isValidPassword(data.password));
    if (modalType === "login") {
      const credentials: IFormInput = {
        email: data.email,
        password: data.password,
      };
      // auth.handleLogin(credentials);
      resetForm();
    }

    if (modalType === "signup") {
      resetForm();
    }
  };

  const validateForm = () => {};

  const resetForm = () => {
    reset({ username: "", email: "", password: "", confirmPassword: "" });
  };

  const closeModal = () => {
    // resetForm();
    props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalType}
        </Modal.Title>
      </Modal.Header>
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
