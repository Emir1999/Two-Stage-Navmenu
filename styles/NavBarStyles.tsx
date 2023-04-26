import { ChevronDown } from 'react-feather';
import Link from 'next/link';
import styled from 'styled-components';

export const NavChevronDown = styled(ChevronDown)`
  font-weight: 600;
  height: 1.2rem;
  width: 1.2rem;
  transition: 0.3s ease-in-out;
`;

export const NavSpan = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: rgba(0, 0, 0, 1);

  &:hover {
    padding-top: 0.2rem;
    border-bottom: 0.2rem solid rgba(220, 36, 31, 1);
    color: rgba(220, 36, 31, 1);
  }

  &:hover ${NavChevronDown} {
    transform: rotate(180deg);
  }
`;

export const NavItem = styled(Link)`
  font-size: 1.2rem;
  height: 100%;
  font-weight: 500;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  gap: 2rem;
`;

export const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  border-radius: 0.3rem;
  padding: 0 2rem;
`;
