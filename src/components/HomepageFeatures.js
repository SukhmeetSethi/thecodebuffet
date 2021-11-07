import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { Link } from "react-router-dom";

const FeatureList = [
  {
    title: "Videos are better",
    Svg: require("../../static/img/undraw_press_play.svg").default,
    description: (
      <>
        If you are one of those who like videos much more than text tutorial,
        then you can use our Youtube channel and like it goes with it, pls don't
        forget to like and subscribe :)
      </>
    ),
    link: "/docs/intro",
  },
  {
    title: "How it started",
    Svg: require("../../static/img/undraw_news.svg").default,
    description: (
      <>
        Not very interesting but yes there is bit of story how it all started.
      </>
    ),
    link: "/docs/intro",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--6")}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
