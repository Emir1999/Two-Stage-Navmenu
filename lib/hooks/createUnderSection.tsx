import NavBarUnderSection from '@/components/NavBarUnderSection';
import { NavBarUnderSectionProps } from '@/models/props/NavBarUnderSectionProps';
import { createRoot } from 'react-dom/client';

export const createUnderSection = ({
  position,
  setBodyWidth,
  setDifferencePercentage,
  item,
  ref,
  setDropDown,
  parent,
  navTree,
  animationState,
}: NavBarUnderSectionProps) => {
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
      ref={ref}
      animationState={animationState}
      position={position}
      setBodyWidth={setBodyWidth}
      setDifferencePercentage={setDifferencePercentage}
      parent={parent}
      navTree={navTree}
    />
  );
  const root = createRoot(navBarUnderRoot);
  root.render(navBarUnder);
};
