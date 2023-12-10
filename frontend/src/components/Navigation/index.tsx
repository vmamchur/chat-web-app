import { FaCommentAlt, FaUsers, FaCogs, FaPowerOff } from 'react-icons/fa';
import { FaUserPen } from 'react-icons/fa6';

import logo from '../../assets/logo.svg';

import { logout } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { NavItem } from './types';
import {
  Logo,
  NavigationItem,
  NavigationItemLink,
  NavigationList,
  Root,
} from './style';

const navigationIconProps = {
  size: 20,
  color: 'rgba(255, 255, 255, 0.7)',
};

const Navigation = () => {
  const dispatch = useAppDispatch();

  const navigationItems: NavItem[] = [
    { label: 'Chats', icon: <FaCommentAlt {...navigationIconProps} /> },
    {
      label: 'Friends',
      icon: <FaUsers {...navigationIconProps} />,
      flexGrow: 1,
    },
    { label: 'Profile', icon: <FaUserPen {...navigationIconProps} /> },
    { label: 'Settings', icon: <FaCogs {...navigationIconProps} /> },
    {
      label: 'Logout',
      icon: (
        <FaPowerOff
          {...navigationIconProps}
          onClick={() => dispatch(logout())}
        />
      ),
    },
  ];

  return (
    <Root>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <NavigationList>
        {navigationItems.map((item) => (
          <NavigationItem key={item.label} flexgrow={item.flexGrow}>
            <NavigationItemLink onClick={item.onClick}>
              {item.icon}
            </NavigationItemLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </Root>
  );
};

export default Navigation;