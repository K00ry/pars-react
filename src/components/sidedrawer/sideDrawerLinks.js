import React from 'react';

const Sublinks = props => {
  let jaber = props.dataMain.map((arr, index) => (
    <li key={index}>
      <a className="nav-link-style-sub">{arr.a.genre}</a>
    </li>
  ));

  return <ul className="sideNav-sub">{jaber}</ul>;
};

export default Sublinks;
