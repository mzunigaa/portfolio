import React from "react";
import { Modal as ModalMui } from "@material-ui/core";

export const Modal = ({ ...props }) => {
  return <ModalMui {...props}>{props.children}</ModalMui>;
};

export default Modal;
