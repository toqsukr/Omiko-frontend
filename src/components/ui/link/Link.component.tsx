import { FC, PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const Link: FC<PropsWithChildren<NavLinkProps>> = ({ children, ...props }) => {
  return <NavLink {...props}>{children}</NavLink>;
};

export default Link;
