import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

type FeatureItem = {
 
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  title: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Videos are better",
    Svg: require("../../../static/img/undraw_press_play.svg").default,
    description: (
      <>
        If you are one of those who like videos much more than text tutorial,
        then you can use our Youtube channel and like it goes with it, pls don't
        forget to like and subscribe :)
      </>
    ),
    link: "#",
  },
  {
    title: "How it started",
    Svg: require("../../../static/img/undraw_news.svg").default,
    description: (
      <>
        Not very interesting but yes there is bit of story how it all started.
      </>
    ),
    link: "/docs/about-me/about-me",
  },
 
];

function Feature({Svg, title, description, link}: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg}  />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
