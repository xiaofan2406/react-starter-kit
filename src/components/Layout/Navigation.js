import React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import { theme, variables } from 'styles';
import { NAV_LINKS } from 'utils/constants';

const cssClass = css`
  & .link {
    color: ${theme.inverseColor};
    text-decoration: none;
    padding: 0 0.5em;
    display: inline-block;
    line-height: ${variables.headerHeight}px;
    height: ${variables.headerHeight}px;
    &:hover {
      background-color: ${theme.bgAccentColor};
    }
    &.active {
      border-bottom: 2px solid ${theme.primaryColor};
    }
  }
`;

const Navigation = () => (
  <div className={cssClass}>
    {Object.values(NAV_LINKS).map(route => (
      <NavLink
        className="link"
        activeClassName="active"
        key={route.to}
        exact={route.exact}
        to={route.to}
      >
        {route.name}
      </NavLink>
    ))}
  </div>
);

export { Navigation as Component };

export default Navigation;
