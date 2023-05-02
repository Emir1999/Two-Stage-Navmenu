import {
  BarOne,
  BarThree,
  BarTwo,
  BurgerButton,
} from 'styles/NavBarMobileStyles';
import {
  NavChevronDown,
  NavContainer,
  NavItemStyle,
  NavItems,
  NavSpan,
} from 'styles/NavBarStyles';
import { useCallback, useEffect, useRef, useState } from 'react';

import ChangeLanguage from './ChangeLanguage';
import Image from 'next/image';
import { NavBarUnderSectionProps } from '@/models/props/NavBarUnderSectionProps';
import { NavItem } from '@/models/NavItem';
import { NavItemsRoute } from '@/lib/routes';
import bucherLogo from '@/public/bucherLogo.svg';
import { createMobileSlider } from '@/lib/hooks/createMobileSlider';
import { createUnderSection } from '@/lib/hooks/createUnderSection';

export interface Position extends DOMRect {
  rightBorder: number;
}

export default function NavBar() {
  const [bodyWidth, setBodyWidth] = useState<number>(0);
  const [differencePercentage, setDifferencePercentage] = useState<number>(0);
  const [myElement, setMyElement] = useState<HTMLElement>();
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [hoverButton, setHoverButton] = useState<boolean>(false);

  const burgerRef = useRef<HTMLButtonElement>(null);
  const navItems: NavItem[] = NavItemsRoute();

  const myRef: (instance: HTMLElement | null) => void = useCallback(
    (node: HTMLElement | null) => {
      if (node !== null) {
        setMyElement(node);
      }
    },
    []
  );

  const onHover = (e: any, item: NavItem, p: NavItem | NavItem[]) => {
    const { target } = e;

    setHoverButton(true);

    const isRoot = document.getElementById('--child');
    const rootFirsTChild: HTMLElement | undefined =
      isRoot?.firstChild as HTMLElement;

    if (rootFirsTChild?.id == item.id + '--under') return;

    const targetSiblings = target.parentElement.children;

    for (let i = 0; i < targetSiblings.length; i++) {
      const child = targetSiblings[i];
      child?.classList.remove('active');
    }

    isRoot?.remove();
    target.classList.add('active');

    // Source - https://stackoverflow.com/a/30949389
    const rect: DOMRect = target.getBoundingClientRect();

    const position: Position = {
      height: rect.height,
      width: rect.width,
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      bottom: rect.bottom,
      right: rect.right,
      rightBorder: 0,
      x: 0,
      y: 0,
      toJSON: rect.toJSON(),
    };

    const underSectionProps: NavBarUnderSectionProps = {
      item,
      setDropDown,
      ref: myRef,
      position,
      setBodyWidth,
      setDifferencePercentage,
      parent: p,
      navTree: [],
    };

    createUnderSection({ ...underSectionProps });
  };

  const onLeave = () => {
    setHoverButton(false);
  };

  useEffect(() => {
    if (myElement) {
      const refWidth = myElement.offsetWidth;
      const firstStep = (refWidth / bodyWidth) * 100;
      const secondStep = (100 - firstStep) / 2;
      const finalStep = secondStep + differencePercentage / 2;

      const myElementParent: HTMLElement | null = myElement.parentElement;

      myElementParent!.style.left = `${finalStep}%`;

      if (!dropDown && !hoverButton) {
        myElementParent?.remove();

        const getHoverItem: HTMLElement | null = document.getElementById(
          myElement.id.split('--')[0]
        );

        getHoverItem?.classList.remove('active');
      }
    }
  }, [bodyWidth, differencePercentage, dropDown, hoverButton, myElement]);

  const handleClick = (e: any, navItems: NavItem[]) => {
    e.target.classList.add('change');

    const navTree: NavItem | NavItem[] | [] = [];

    createMobileSlider({ items: navItems, navTree, burgerRef });
  };

  return (
    <>
      <NavContainer>
        <Image src={bucherLogo} alt="Logo" width={100} height={20} />
        <BurgerButton ref={burgerRef} onClick={(e) => handleClick(e, navItems)}>
          <BarOne></BarOne>
          <BarTwo></BarTwo>
          <BarThree></BarThree>
        </BurgerButton>
        <NavItems>
          {navItems.map((item, index) => (
            <NavItemStyle
              id={item.id}
              onMouseLeave={() => onLeave()}
              onMouseEnter={(e) => onHover(e, item, navItems)}
              href={'#'}
              key={index}
            >
              <NavSpan>{item.title}</NavSpan>
              <NavChevronDown />
            </NavItemStyle>
          ))}
        </NavItems>
        <ChangeLanguage position={'navbar'} />
      </NavContainer>
    </>
  );
}
