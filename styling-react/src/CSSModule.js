import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  // const Button = styled.button`
  //     overflow: hidden;
  //     position: relative;
  //     display: inline-block;
  //     padding: .475em .825em;
  //     font-size: 14px;
  //     line-height: 1.2em;
  //     vertical-align: top;
  //     box-sizing: border-box;
  //     border: 1px solid #06c;
  //     border-radius: 0;
  //     background-color: #fff;
  //     color: #06c;
  //     cursor: pointer;
  // `
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      Hello, I'm <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
