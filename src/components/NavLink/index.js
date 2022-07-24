import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function NavLink({ links }) {
  return (
    <div>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

NavLink.propTypes = {
  links: PropTypes.array
};
