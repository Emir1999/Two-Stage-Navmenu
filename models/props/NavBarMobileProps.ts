import { RefObject } from 'react';
import { NavItem } from '../NavItem';

export interface NavBarMobileProps {
  items: NavItem | NavItem[];
  navTree: NavItem[] | [];
  burgerRef: RefObject<HTMLButtonElement>;
}
