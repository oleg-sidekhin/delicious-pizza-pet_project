import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './CSLoader.module.scss';

const CSLoader = () => (
  <div className={classes.loader}>
    <ContentLoader
      speed={2}
      width={300}
      height={480}
      viewBox="0 0 300 480"
      backgroundColor="#f7f7f7"
      foregroundColor="#ecebeb"
    >
      <rect x="80" y="24" rx="0" ry="0" width="0" height="1" />
      <rect x="4" y="439" rx="10" ry="10" width="95" height="37" />
      <rect x="7" y="293" rx="8" ry="8" width="217" height="28" />
      <rect x="115" y="254" rx="0" ry="0" width="0" height="1" />
      <rect x="7" y="336" rx="8" ry="8" width="275" height="63" />
      <rect x="179" y="434" rx="21" ry="21" width="111" height="43" />
      <rect x="30" y="30" rx="30" ry="30" width="228" height="239" />
    </ContentLoader>
  </div>
);

export default CSLoader;
