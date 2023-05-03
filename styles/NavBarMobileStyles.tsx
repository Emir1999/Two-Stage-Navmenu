import Image from 'next/image';
import { X } from 'react-feather';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BarOne = styled.div`
  width: 25px;
  height: 2px;
  background-color: rgba(0, 0, 0, 1);
  margin: 5px 0;
  transition: 0.3s;
  border-radius: 0.3rem;
  pointer-events: none;
`;

export const BarTwo = styled(BarOne)``;

export const BarThree = styled(BarOne)``;

export const BurgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    height: fit-content;
    width: fit-content;
    color: black;
    background-color: transparent;
    margin-left: auto;
    border: none;
    padding: 0.45rem 0.5rem;
    border-radius: 0.3rem;

    &.change > ${BarOne} {
      transform: translate(0, 7px) rotate(-45deg);
      background-color: rgba(220, 36, 31, 1);
    }

    &.change > ${BarTwo} {
      opacity: 0;
    }

    &.change > ${BarThree} {
      transform: translate(0, -6px) rotate(45deg);
      background-color: rgba(220, 36, 31, 1);
    }

    &:hover {
      background-color: #dedede;
    }

    &:hover > ${BarOne}, &:hover > ${BarTwo}, &:hover > ${BarThree} {
      background-color: rgba(220, 36, 31, 1);
    }
  }
`;

export const NavBarMobileXIcon = styled(X)`
  font-weight: 600;
  height: 1.25rem;
  width: 1.25rem;
`;

export const CloseButton = styled.button`
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 2.5rem;
  color: black;
  background-color: transparent;
  border: none;
  border-radius: 0.3rem;

  &:hover {
    background-color: #dedede;
  }

  &:hover ${NavBarMobileXIcon} {
    color: rgba(220, 36, 31, 1);
  }
`;

export const ImageStyled = styled(Image)`
  margin-left: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  margin-left: 2.5rem;
`;

export const NavBarMobileContainer = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    height: 100%;
    width: 75%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 1);

    &.move-left {
      animation: slide-left 0.3s ease-out;
    }

    @keyframes slide-left {
      0% {
        left: 0;
        opacity: 1;
      }
      20% {
        left: 10px;
        opacity: 0.8;
      }
      100% {
        left: -1000px;
        opacity: 0;
      }
    }
    @media (max-width: 425px) {
      width: 90%;
    }

    @media (max-width: 375px) {
      width: 100%;
    }
  }
`;

export const HorizontalLine = styled.div`
  border-bottom: 0.15rem solid rgba(245, 245, 245, 1);
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
