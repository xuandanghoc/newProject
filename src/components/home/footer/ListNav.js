import React from 'react';

function ListNav(props) {
  const { nav } = props;
  return (
      <li>
        <a>{nav}</a>
      </li>
  );
}

export default ListNav;
