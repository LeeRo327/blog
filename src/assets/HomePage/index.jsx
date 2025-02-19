import React from 'react';
import RotationChart from '@@components/RotationChart';
import ArticleList from '../ArticleList';

import charts from './charts';

import styles from './index.less';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <RotationChart charts={charts} />
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Persist in doing what is right.</h3>
      </div>
      <ArticleList />
    </div>
  );
}

export default HomePage;
