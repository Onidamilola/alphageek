import React from "react";
import { Portal } from "react-portal";
import Loader, { Oval } from "react-loader-spinner";
import styles from "./index.module.css";

const ModalLoader = ({ visible }) => {
  if (!visible) return null;
  return (
    <Portal closeOnEsc closeOnOutsideClick>
      <div className={styles["backdrop"]}>
        <Oval type="Oval" color="#E6072C" height={60} width={60} />
      </div>
    </Portal>
  );
};

export default ModalLoader;