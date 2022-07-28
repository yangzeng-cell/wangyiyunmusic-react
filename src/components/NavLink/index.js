import React, { useState } from 'react';
import { NavLink as NavLink1 } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from './style';
export default function NavLink({ links }) {
  const [isActive, setIsActive] = useState(0);
  function setActiveFn(index) {
    return setIsActive(index);
  }
  return (
    <NavLinkWrapper>
      <>
        <ul className="m_nav">
          {links.map((link, index, links) => {
            return (
              <li
                key={link.id}
                title={link.name}
                onClick={() => setActiveFn(index)}
              >
                <NavLink1
                  className={
                    (isActive === index ? 'isActive ' : '') +
                    'link_src' +
                    (index === links.length - 1 ? ' last_child' : '')
                  }
                  to={link.path}
                >
                  <em>{link.name}</em>
                  <sub
                    className={(isActive === index ? 'isBlock ' : '') + 'cor'}
                  >
                    &nbsp;
                  </sub>
                </NavLink1>
              </li>
            );
          })}
        </ul>
      </>
    </NavLinkWrapper>
  );
}

NavLink.propTypes = {
  links: PropTypes.array
};
