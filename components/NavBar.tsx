import {
  NavChevronDown,
  NavContainer,
  NavItem,
  NavItems,
  NavSpan,
} from 'styles/NavBarStyles';
import { useCallback, useEffect, useRef, useState } from 'react';

import ChangeLanguage from './ChangeLanguage';
import Image from 'next/image';
import NavBarUnderSection from './NavBarUnderSection';
import bucherLogo from '@/public/bucherLogo.svg';
import { createRoot } from 'react-dom/client';

export default function NavBar() {
  const [elementCreated, setElementCreated] = useState(false);
  const [bodyWidth, setBodyWidth] = useState(0);
  const [differencePercentage, setDifferencePercentage] = useState(0);
  const [myElement, setMyElement] = useState<HTMLElement>();

  const myRef = useCallback((node: any) => {
    if (node !== null) {
      setMyElement(node);
    }
  }, []);

  const navItems = [
    {
      id: 'nav-bucher__us',
      name: 'Über uns',
      children: [
        {
          name: 'Mission und Vision',
        },
        {
          name: 'Verwaltungsrat',
        },
        {
          name: 'Konzernleitung',
        },
        {
          name: 'Kennzahlen',
        },
        {
          name: 'Standorte',
        },
        {
          name: 'Nachhaltigkeit',
        },
        {
          name: 'Geschichte',
        },
      ],
    },
    {
      id: 'nav-bucher__business',
      name: 'Geschäftsbereiche',
      children: [
        { name: 'Kuhn Group' },
        {
          name: 'Bucher Municipal',
        },
        {
          name: 'Bucher Hydraulics',
        },
        {
          name: 'Bucher Emhart Glass',
        },
        {
          name: 'Bucher Specials',
        },
      ],
    },
    {
      id: 'nav-bucher__investors',
      name: 'Investoren',
      children: [
        {
          name: 'Aktie',
        },
        {
          name: 'Generalversammlung',
        },
        {
          name: 'Corporate Governance',
        },
        {
          name: 'Finanzberichte',
        },
        {
          name: 'Termine',
        },
      ],
    },
    {
      id: 'nav-bucher__media',
      name: 'Medien',
      children: [
        {
          name: 'Medienmitteilung',
        },
        {
          name: 'Ad-hoc-Mitteilungen',
        },
        {
          name: 'Mediendossiers',
        },
        {
          name: 'Publikationen',
        },
        {
          name: 'Präsentationen',
        },
        {
          name: 'Bilder',
        },
      ],
    },
    {
      id: 'nav-bucher__career',
      name: 'Karriere',
      children: [
        {
          name: 'Arbeiten bei Bucher Industries',
        },
        {
          name: 'Wieso Bucher Industries',
        },
        {
          name: 'Offene Stellen',
        },
      ],
    },
  ];

  const onHover = (e: any, item: any) => {
    const { target } = e;

    if (document.getElementById(item.id + '--child')) return;

    // Source - https://stackoverflow.com/a/30949389
    const rect = target.getBoundingClientRect();
    const position = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };

    const rightBorderFromLeft = position.left + target.offsetWidth;
    const fromRight = document.body.offsetWidth - rightBorderFromLeft;

    const navBarUnderRoot = document.createElement('div');
    navBarUnderRoot.id = item.id + '--child';
    navBarUnderRoot.style.position = 'absolute';
    navBarUnderRoot.style.bottom = target.offsetBottom;

    const bodyWidth = document.body.offsetWidth;

    const leftPercentage = (position.left / bodyWidth) * 100;
    const rightPercentage = (fromRight / bodyWidth) * 100;

    const findPercentage = leftPercentage - rightPercentage;

    setBodyWidth(bodyWidth);
    setDifferencePercentage(findPercentage);
    document.body.appendChild(navBarUnderRoot);

    const navBarUnder = (
      <NavBarUnderSection
        id={item.id + '---child'}
        right={fromRight}
        ref={myRef}
      />
    );
    const root = createRoot(navBarUnderRoot);
    root.render(navBarUnder);

    if (navBarUnderRoot?.children[0]) {
    }
    setElementCreated(true);
  };

  const onLeave = (e: any) => {
    if (typeof window === 'undefined') return;
    const id = e.target.parentElement.id;
    const navBarUnder = document.getElementById(id + '--child');
    if (navBarUnder) navBarUnder.remove();
    setElementCreated(false);
  };

  useEffect(() => {
    if (myElement) {
      const refWidth = myElement.offsetWidth;
      const firstStep = (refWidth / bodyWidth) * 100;
      const secondStep = (100 - firstStep) / 2;
      const finalStep = secondStep + differencePercentage / 2;
      myElement.parentElement!.style.left = `${finalStep}%`;
      setElementCreated(false);
    }
  }, [bodyWidth, differencePercentage, myElement]);

  return (
    <>
      <NavContainer>
        <Image src={bucherLogo} alt="Logo" width={100} height={18} />
        <NavItems>
          {navItems.map((item, index) => (
            <NavItem
              id={item.id}
              onMouseOut={(e) => onLeave(e)}
              onMouseOver={(e) => onHover(e, item)}
              href={'#'}
              key={index}
            >
              <NavSpan>
                {item.name} <NavChevronDown width={16} height={16} />
              </NavSpan>
            </NavItem>
          ))}
        </NavItems>
        <ChangeLanguage />
      </NavContainer>
    </>
  );
}
