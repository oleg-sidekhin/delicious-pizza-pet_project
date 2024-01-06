import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './PizzaLoader.module.scss';

const PizzaLoader = () => (
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
      <rect x="7" y="437" rx="10" ry="10" width="95" height="37" />
      <rect x="7" y="306" rx="8" ry="8" width="264" height="28" />
      <rect x="115" y="254" rx="0" ry="0" width="0" height="1" />
      <rect x="5" y="350" rx="8" ry="8" width="267" height="39" />
      <circle cx="138" cy="145" r="132" />
      <rect x="186" y="434" rx="21" ry="21" width="111" height="43" />
    </ContentLoader>
  </div>
);

export default PizzaLoader;
