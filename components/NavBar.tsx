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
import {
  BarOne,
  BarThree,
  BarTwo,
  BurgerButton,
} from 'styles/NavBarMobileStyles';
import NavBarMobile from './NavBarMobile';

export interface NavChild {
  id: string;
  title: string;
  children: NavChild[];
}

export interface NavItem {
  id: string;
  title: string;
  children: NavChild[];
}

export interface Position extends DOMRect {
  rightBorder: number;
}

export default function NavBar() {
  const [bodyWidth, setBodyWidth] = useState<number>(0);
  const [differencePercentage, setDifferencePercentage] = useState<number>(0);
  const [myElement, setMyElement] = useState<HTMLElement>();
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [hoverButton, setHoverButton] = useState(false);

  const burgerRef = useRef<HTMLButtonElement>(null);

  const myRef: (instance: HTMLElement | null) => void = useCallback(
    (node: HTMLElement | null) => {
      if (node !== null) {
        setMyElement(node);
      }
    },
    []
  );

  const navItems: NavItem[] = [
    {
      id: 'nav-bucher__us',
      title: 'Über uns',
      children: [
        {
          id: 'nav-bucher__mission',
          title: 'Mission und Vision',
          children: [],
        },
        {
          id: 'nav-bucher__board-directors',
          title: 'Verwaltungsrat',
          children: [],
        },
        {
          id: 'nav-bucher__group-managment',
          title: 'Konzernleitung',
          children: [],
        },
        {
          id: 'nav-bucher__metrics',
          title: 'Kennzahlen',
          children: [],
        },
        {
          id: 'nav-bucher__locations',
          title: 'Standorte',
          children: [],
        },
        {
          id: 'nav-bucher__sustainability',
          title: 'Nachhaltigkeit',
          children: [],
        },
        {
          id: 'nav-bucher__history',
          title: 'Geschichte',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__business',
      title: 'Geschäftsbereiche',
      children: [
        {
          id: 'nav-bucher__kuhn',
          title: 'Kuhn Group',
          children: [
            {
              id: 'nav-bucher__test',
              title: 'Test',
              children: [
                {
                  id: 'nav-bucher__deeper',
                  title: 'Even deeper',
                  children: [],
                },
              ],
            },
            {
              id: 'nav-bucher__test-two',
              title: 'Test2',
              children: [],
            },
          ],
        },
        {
          id: 'nav-bucher__municipal',
          title: 'Bucher Municipal',
          children: [],
        },
        {
          id: 'nav-bucher__hydraulics',
          title: 'Bucher Hydraulics',
          children: [],
        },
        {
          id: 'nav-bucher__emhart-glass',
          title: 'Bucher Emhart Glass',
          children: [],
        },
        {
          id: 'nav-bucher__specials',
          title: 'Bucher Specials',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__investors',
      title: 'Investoren',
      children: [
        {
          id: 'nav-bucher__actions',
          title: 'Aktie',
          children: [],
        },
        {
          id: 'nav-bucher__general-assembly',
          title: 'Generalversammlung',
          children: [],
        },
        {
          id: 'nav-bucher__corporate-governance',
          title: 'Corporate Governance',
          children: [],
        },
        {
          id: 'nav-bucher__finance-reports',
          title: 'Finanzberichte',
          children: [],
        },
        {
          id: 'nav-bucher__termins',
          title: 'Termine',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__media',
      title: 'Medien',
      children: [
        {
          id: 'nav-bucher__media-share',
          title: 'Medienmitteilung',
          children: [
            {
              id: 'fherf',
              title: 'Elvira',
              children: [],
            },
          ],
        },
        {
          id: 'nav-bucher__ad',
          title: 'Ad-hoc-Mitteilungen',
          children: [],
        },
        {
          id: 'nav-bucher__media-dose',
          title: 'Mediendossiers',
          children: [],
        },
        {
          id: 'nav-bucher__publications',
          title: 'Publikationen',
          children: [],
        },
        {
          id: 'nav-bucher__presentations',
          title: 'Präsentationen',
          children: [],
        },
        {
          id: 'nav-bucher__photos',
          title: 'Bilder',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__career',
      title: 'Karriere',
      children: [
        {
          id: 'nav-bucher__jobs',
          title: 'Arbeiten bei Bucher Industries',
          children: [
            {
              id: 'nav-bucher__console',
              title: 'Console',
              children: [
                {
                  id: 'nav-bucher__vacancies',
                  title: 'Vacancies',
                  children: [
                    {
                      id: 'nav-bucher__verydeep',
                      title: 'Too deep',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'nav-bucher__industries',
          title: 'Wieso Bucher Industries',
          children: [],
        },
        {
          id: 'nav-bucher__open-positions',
          title: 'Offene Stellen',
          children: [],
        },
      ],
    },
  ];

  const onHover = (
    e: any,
    item: NavItem,
    parent: NavItem | NavItem[]
  ): void => {
    const { target } = e;

    setHoverButton(true);

    const isRoot = document.getElementById('--child');
    const rootFirsTChild: HTMLElement | undefined =
      isRoot?.firstChild as HTMLElement;
    //const findElement = document.getElementById(item.id + '--under');

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

    // const rightBorderFromLeft = position.left + position.width;

    const navBarUnderRoot = document.createElement('div');
    navBarUnderRoot.id = '--child';
    navBarUnderRoot.style.position = 'absolute';
    navBarUnderRoot.style.top = `${position.top + position.height}px`;

    const bodyWidth = document.body.offsetWidth;

    position.rightBorder = position.left + position.width;
    const fromRight = bodyWidth - position.rightBorder;

    const leftPercentage = (position.left / bodyWidth) * 100;
    const rightPercentage = (fromRight / bodyWidth) * 100;

    const findPercentage = leftPercentage - rightPercentage;

    setBodyWidth(bodyWidth);
    setDifferencePercentage(findPercentage);
    document.body.appendChild(navBarUnderRoot);

    const navBarUnder = (
      <NavBarUnderSection
        item={item}
        setDropDown={setDropDown}
        ref={myRef}
        position={position}
        setBodyWidth={setBodyWidth}
        setDifferencePercentage={setDifferencePercentage}
        parent={parent}
        navTree={[]}
      />
    );
    const root = createRoot(navBarUnderRoot);
    root.render(navBarUnder);
  };

  const onLeave = (e: any) => {
    setHoverButton(false);
  };

  useEffect(() => {
    if (myElement) {
      const refWidth = myElement.offsetWidth;
      const firstStep = (refWidth / bodyWidth) * 100;
      const secondStep = (100 - firstStep) / 2;
      const finalStep = secondStep + differencePercentage / 2;

      if (!myElement.parentElement) return;

      myElement.parentElement!.style.left = `${finalStep}%`;

      if (!dropDown && !hoverButton) {
        myElement.parentElement!.remove();

        const getHoverItem = document.getElementById(
          myElement.id.split('--')[0]
        ) as HTMLElement;

        getHoverItem?.classList.remove('active');
      }
    }
  }, [bodyWidth, differencePercentage, dropDown, hoverButton, myElement]);

  const handleClick = (e: any, navItems: any) => {
    e.target.classList.add('change');
    const navBarMobileRoot = document.createElement('div');
    navBarMobileRoot.id = '--mobile';

    document.getElementById('myId')?.appendChild(navBarMobileRoot);

    const navTree: any[] = [];

    const navBarMobile = (
      <NavBarMobile
        items={navItems}
        depth={0}
        navTree={navTree}
        burgerRef={burgerRef}
      />
    );
    const rootMobile = createRoot(navBarMobileRoot);
    rootMobile.render(navBarMobile);
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
            <NavItem
              id={item.id}
              onMouseLeave={(e) => onLeave(e)}
              onMouseEnter={(e) => onHover(e, item, navItems)}
              href={'#'}
              key={index}
            >
              <NavSpan>{item.title}</NavSpan>
              <NavChevronDown />
            </NavItem>
          ))}
        </NavItems>
        <ChangeLanguage position={'navbar'} />
      </NavContainer>
    </>
  );
}
