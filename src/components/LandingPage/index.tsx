import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageMinimal(): JSX.Element {
  return (
    <div className={clsx("container", styles.centerContent)}>
      <div className="text--center">
        <img
          src={require("./gommeskin.png").default}
          alt="Citybuld Wiki Gomme"
          className={styles.image}
          onClick={() => (window.location.href = "/docs/category/lobby")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="text--center">
        <h1>CityBuild Wiki</h1>
        <p>Deine Guide für CityBuild.</p>
      </div>
    </div>
  );
}
