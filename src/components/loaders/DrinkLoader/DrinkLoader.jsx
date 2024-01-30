import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './DrinkLoader.module.scss';

const DrinkLoader = () => (
  <div className={classes.loader}>
    <ContentLoader
      speed={2}
      width={300}
      height={400}
      viewBox="0 0 300 400"
      backgroundColor="#f7f7f7"
      foregroundColor="#ecebeb"
    >
      <rect x="80" y="24" rx="0" ry="0" width="0" height="1" />
      <rect x="1" y="359" rx="10" ry="10" width="95" height="37" />
      <rect x="12" y="294" rx="8" ry="8" width="217" height="28" />
      <rect x="115" y="254" rx="0" ry="0" width="0" height="1" />
      <rect x="181" y="355" rx="21" ry="21" width="111" height="43" />
      <rect x="74" y="24" rx="30" ry="30" width="135" height="246" />
    </ContentLoader>
  </div>
);

export default DrinkLoader;
