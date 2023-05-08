import { AnimationState } from './NavBarUnderSectionProps';
import { NavItem } from '../NavItem';
import { RefObject } from 'react';

export interface NavBarMobileProps {
  items: NavItem | NavItem[];
  navTree: NavItem[] | [];
  burgerRef: RefObject<HTMLButtonElement>;
  animationState: AnimationState;
}
