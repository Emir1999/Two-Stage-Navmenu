import { ChevronLeft, ChevronRight } from 'react-feather';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavBarUnderChevronRight = styled(ChevronRight)`
  font-weight: 600;
  height: 1.5rem;
  width: 1.5rem;
`;

export const SectionLine = styled.div`
  border-right: 0.25rem solid rgba(255, 255, 255, 1);
  height: 100%;
`;

export const NavBarUnderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 100%;
  border: none;
  background-color: transparent;
  border-radius: 0 0.3rem 0.3rem 0;

  &:hover {
    background-color: #dedede;
  }

  &:hover ${NavBarUnderChevronRight} {
    color: rgba(220, 36, 31, 1);
  }
`;

export const NavBarUnderNameSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.1rem;
  font-weight: 600;
  text-overflow: ellipsis;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

interface NavBarUnderNameProps {
  hasChildren?: boolean;
}

export const NavBarUnderName = styled.div`
  height: 100%;
  width: auto;
  flex-grow: 1;
  max-width: ${(props: NavBarUnderNameProps) =>
    props.hasChildren ? '13rem' : 'none'};
  min-width: 9rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  border-radius: ${(props: any) =>
    props.hasChildren ? '0.3rem 0 0 0.3rem' : '0.3rem'};

  &:hover {
    background-color: #dedede;
  }

  &:hover ${NavBarUnderNameSpan} {
    color: rgba(220, 36, 31, 1);
  }

  @media (max-width: 768px) {
    flex-grow: 4;
    max-width: none;
  }
`;

export const NavBarUnderItem = styled.div`
  display: flex;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 0.3rem;
  align-items: center;
  height: 3.5rem;
`;

export const NavBarItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavBarUnderChevronBack = styled(ChevronLeft)`
  font-weight: 600;
  height: 1.5rem;
  width: 1.5rem;
`;

export const NavBarUnderTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  align-self: center;
  max-width: 13rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const NavBarUnderTitleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 100%;
  border: none;
  background-color: transparent;
  border-radius: 0.3rem;

  &:hover {
    background-color: #dedede;
  }

  &:hover ${NavBarUnderChevronBack} {
    color: rgba(220, 36, 31, 1);
  }
`;

export const NavBarUnderTitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 2.5rem;
`;

export const NavBarUnderContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 1);
  max-width: 20rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  border-radius: 0.3rem;
`;
