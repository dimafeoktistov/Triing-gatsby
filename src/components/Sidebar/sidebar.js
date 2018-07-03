import React from 'React';
import './sidebar.module.scss';

const sidebar = props => {
  return (
    <div className="sidebar" onClick={props.burgerClicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default sidebar;