import { ChevronDown } from 'react-feather';
import Link from 'next/link';
import styled from 'styled-components';

export const NavChevronDown = styled(ChevronDown)`
  font-weight: 600;
  height: 1.2rem;
  width: 1.2rem;
  transition: 0.3s ease-in-out;
  pointer-events: none;
`;

export const NavSpan = styled.span`
  font-size: 1.2rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const NavItemStyle = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);

  &.active {
    padding-top: 0.2rem;
    border-bottom: 0.2rem solid rgba(220, 36, 31, 1);
    color: rgba(220, 36, 31, 1);
  }

  &.active > ${NavChevronDown} {
    transform: rotate(180deg);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 6rem;
    gap: 0;
  }
`;

export const NavItems = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  max-width: 80rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.3rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }

  @media (max-width: 1440px) {
    max-width: 95%;
  }
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
