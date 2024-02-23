import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tips-tricks/git/git-alias">
            Get Started
          </Link>
        </div>
        {/* <div className="buttons">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}
        {/* <div className={styles.bubble__outer}>
          <BubbleView name="Java" />
          <BubbleView name="Windows" />
          <BubbleView name="AWS" />
          <BubbleView name="GraphQL" />
          <BubbleView name="Azure" />
          <BubbleView name="Spring" />
          <BubbleView name="REST" />
          <BubbleView name="CI/CD" />
          <BubbleView name="NoSQL" />
          <BubbleView name="Kafka" />

        </div> */}
       
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.projectName}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}