import {
  NavChevronDown,
  NavContainer,
  NavItem,
  NavItems,
  NavSpan,
} from 'styles/NavBarStyles';

import ChangeLanguage from './ChangeLanguage';
import { ChevronDown } from 'react-feather';
import Image from 'next/image';
import bucherLogo from '@/public/bucherLogo.svg';

export default function NavBar() {
  const navItems = [
    {
      name: 'Über uns',
    },
    {
      name: 'Geschäftsbereiche',
    },
    {
      name: 'Investoren',
    },
    {
      name: 'Medien',
    },
    {
      name: 'Karriere',
    },
  ];

  return (
    <>
      <NavContainer>
        <Image src={bucherLogo} alt="Logo" width={100} height={18} />
        <NavItems>
          {navItems.map((item, index) => (
            <NavItem href={'#'} key={index}>
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
