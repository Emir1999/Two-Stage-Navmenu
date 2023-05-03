import { X } from 'react-feather';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const XStyled = styled(X)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ModalCloseStyle = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: #dedede;
  }

  &:hover ${XStyled} {
    color: rgba(220, 36, 31, 1);
  }
`;

export const ModalTitleStyle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ModalTitleContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContainerStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  z-index: 9999;
  width: 24rem;
  padding: 2rem;
  background-color: white;
  border-radius: 0.3rem;
  overflow: hidden;
  height: fit-content;
  margin: 0 auto;
  top: 40%;
  left: 0;
  right: 0;

  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 2rem;
    padding-bottom: 2rem;
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
    bottom: 0;
    top: auto;
    border-radius: 0.3rem 0.3rem 0 0;
  }
`;
