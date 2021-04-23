import React from "react";
import PropTypes from "prop-types";
import { Modal } from "./Modal";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const BasicModal = ({ height, width, ...props }) => {
  return (
    <Modal {...props}>
      <ModalContainer>{props.children}</ModalContainer>
    </Modal>
  );
};

const ModalContainer = styled(Paper)`
  height: ${(props) => (props.height ? props.height : "580px")};
  width: ${(props) => (props.width ? props.width : "800px")};
  background-color: white;
  padding: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid;
`;

BasicModal.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

export default BasicModal;
