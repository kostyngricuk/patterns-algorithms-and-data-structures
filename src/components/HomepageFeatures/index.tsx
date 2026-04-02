import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import MountainIcon from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeIcon from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactIcon from '@site/static/img/undraw_docusaurus_react.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Patterns',
    Svg: MountainIcon,
    description: (
      <>
        Helpful for writing clean and maintainable code
      </>
    ),
  },
  {
    title: 'Algorithms',
    Svg: TreeIcon,
    description: (
      <>
        Popular algorithms with test cases
      </>
    ),
  },
  {
    title: 'Data Structures',
    Svg: ReactIcon,
    description: (
      <>
        Traditional data structures for everyday tasks
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
