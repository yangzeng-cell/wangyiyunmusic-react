import React, { memo, useEffect, useState } from 'react';
import { DiscoverNavWrapper } from './style';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { titlelist } from '@/utils/constant';
function DiscoverNav({ navList }) {
  useEffect(() => {});
  const [isActive, setIsActive] = useState(0);
  function clickActive(index) {
    document.title = titlelist[index];
    return setIsActive(index);
  }
  return (
    <DiscoverNavWrapper>
      <ul className="nav">
        {navList.map((item, index) => {
          return (
            <li key={item.id}>
              <NavLink
                onClick={() => clickActive(index)}
                className={
                  (isActive === index ? 'click_link ' : '') + 'nav_link'
                }
                to={item.path}
              >
                <span>{item.name}</span>
                {index === 2 ? <span className="playlist"></span> : ''}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </DiscoverNavWrapper>
  );
}
DiscoverNav.propTypes = {
  navList: PropTypes.array
};
export default memo(DiscoverNav);
