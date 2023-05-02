import { Dispatch, RefObject, SetStateAction } from 'react';

import { NavItem } from '../NavItem';
import { Position } from '@/components/NavBar';

export enum AnimationState {
  INIT = 'initial',
  FORWARD = 'forward',
  BACK = 'back',
}

export interface NavBarUnderSectionProps {
  item: NavItem;
  parent: NavItem | NavItem[];
  position: Position;
  navTree: NavItem[] | [];
  animationState: AnimationState;
  setBodyWidth: Dispatch<SetStateAction<number>>;
  setDifferencePercentage: Dispatch<SetStateAction<number>>;
  setDropDown: Dispatch<SetStateAction<boolean>>;
  ref:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
}
