import React, { useState } from "react";
import styles from "./ExperienceItem.module.css";
export default function ExperienceItem(props) {

  const [know, setKnow] = useState("show");
  const [wrapperClass, setWrapprerClass] = useState("");
  const [info, setInfo] = useState("");
  const [btnName, setBtnName] = useState("Show Details")
  const clickHandler = () => {
    console.log("know more button clicked")
    if (know === 'show') {
      console.log("show button is displayed !!")
      setKnow("hide")
      setWrapprerClass("wrapperExp");
      setInfo(<div className={styles.extendedInfo}>
        <ul>
          <li>{props.extendedInfo1}</li>
          <li>{props.extendedInfo2}</li>
          <li>{props.extendedInfo3}</li>
          <li>{props.extendedInfo4}</li>
          <li>{props.extendedInfo5}</li>

        </ul>
        </div>);
        setBtnName("Hide Details")
    } else if (know === "hide") {
      console.log("Hide button is displayed !!")
      setKnow("show")
      setWrapprerClass("");
      setInfo('');
      setBtnName("Show Details")
    }
  }

  return (
    <div className={wrapperClass}>
      <div className={styles.experianceItem}>
        <div className={styles.organisationLogo}></div>
        <div className={styles.organisationInfo}>
          <div className={styles.orgPosition}>{props.position}</div>
          <div className={styles.orgName}>{props.orgName}</div>
          <div className={styles.orgInfo}>{props.orgInfo}</div>
        </div>
        <div className={styles.expDate}>{props.fromDate} - {props.toDate}
          <div><button className={styles.btn} onClick={clickHandler}>{btnName}</button></div></div>
      </div>
      <div>{info}</div>
    </div>

  );
}
