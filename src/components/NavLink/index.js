import React, { useState } from 'react';
import { NavLink as NavLink1 } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from './style';
export default function NavLink({ links }) {
  const [isActive] = useState(0);
  return (
    <NavLinkWrapper>
      <>
        <ul className="m_nav">
          {links.map((link, index, links) => {
            return (
              <li key={link.id} title={link.name}>
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
