import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageMinimal(): JSX.Element {
  return (
    <div className={clsx("container", styles.centerContent)}>
      <div className="text--center">
        <h1>Willkommen auf der Citybuild Wiki</h1>
        <img
          src={require("./gommeskin.png").default}
          alt="Citybuld Wiki Gomme"
          className={styles.imageSmall}
          onClick={() => (window.location.href = "/docs/category/lobby")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="text--center">
        <h1>Erste Schritte</h1>
      </div>
      <div className={styles.buttonGrid}>
        <button
          className={styles.button}
          onClick={() => (window.location.href = "/docs/placeholder")}
        >
          Neu hier?
        </button>
        <button
          className={styles.button}
          onClick={() =>
            (window.location.href =
              "/docs/category/informtionen-zur-seitenerstellung")
          }
        >
          Seiten Erstellen
        </button>
      </div>
      <div className="text--center">
        <h1>Wichtige Guides</h1>
        <div className={styles.buttonGrid}>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/docs/placeholder")}
          >
            Artikel 1
          </button>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/docs/placeholder")}
          >
            Artikel 2
          </button>
        </div>
      </div>
    </div>
  );
}
