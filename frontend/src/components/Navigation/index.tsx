import { FaCommentAlt, FaUsers, FaCogs, FaPowerOff } from 'react-icons/fa';
import { FaUserPen } from 'react-icons/fa6';

import logo from '../../assets/logo.svg';
import { NavItem } from './types';
import {
  Logo,
  NavigationItem,
  NavigationItemLink,
  NavigationList,
  Root,
} from './style';

const navigationIconProps = {
  size: 19,
  color: 'rgba(255, 255, 255, 0.7)',
};

const navigationItems: NavItem[] = [
  { label: 'Chats', icon: <FaCommentAlt {...navigationIconProps} /> },
  { label: 'Friends', icon: <FaUsers {...navigationIconProps} />, flexGrow: 1 },
  { label: 'Profile', icon: <FaUserPen {...navigationIconProps} /> },
  { label: 'Settings', icon: <FaCogs {...navigationIconProps} /> },
  { label: 'Logout', icon: <FaPowerOff {...navigationIconProps} /> },
];

const Navigation = () => {
  return (
    <Root>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <NavigationList>
        {navigationItems.map((item) => (
          <NavigationItem key={item.label} flexGrow={item.flexGrow}>
            <NavigationItemLink>{item.icon}</NavigationItemLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </Root>
  );
};

export default Navigation;