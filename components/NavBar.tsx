import {
  NavChevronDown,
  NavContainer,
  NavItem,
  NavItems,
  NavSpan,
} from 'styles/NavBarStyles';

import ChangeLanguage from './ChangeLanguage';
import Image from 'next/image';
import NavBarUnderSection from './NavBarUnderSection';
import bucherLogo from '@/public/bucherLogo.svg';
import { createRoot } from 'react-dom/client';

export default function NavBar() {
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

  const onHover = (e: any) => {
    if (document.getElementById(e.target.id + '--child')) return;

    const navBarUnderRoot = document.createElement('div');
    navBarUnderRoot.id = e.target.id + '--child';
    navBarUnderRoot.style.position = 'absolute';
    navBarUnderRoot.style.bottom = e.target.offsetBottom;
    navBarUnderRoot.style.left = `${e.target.offsetLeft}px`;

    console.log(e.target.offsetLeft);

    document.body.appendChild(navBarUnderRoot);

    const navBarUnder = <NavBarUnderSection />;
    const root = createRoot(navBarUnderRoot);
    root.render(navBarUnder);

    if (navBarUnderRoot?.children[0])
      console.log((navBarUnderRoot.children[0] as HTMLElement).offsetWidth);

    // navBarUnderRoot.style.right = '480px';
  };

  const onLeave = (e: any) => {
    const navBarUnder = document.getElementById(e.target.id + '--child');
    if (navBarUnder) navBarUnder.remove();
  };

  return (
    <>
      <NavContainer>
        <Image src={bucherLogo} alt="Logo" width={100} height={18} />
        <NavItems>
          {navItems.map((item, index) => (
            <NavItem href={'#'} key={index}>
              <NavSpan
                id={item.id}
                onMouseOut={(e) => onLeave(e)}
                onMouseOver={(e) => onHover(e)}
              >
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
