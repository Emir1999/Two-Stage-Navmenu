import { NavBarUnderContainer } from 'styles/NavBarUnderSectionStyles';
import { forwardRef } from 'react';

const NavBarUnderSection = forwardRef(({ right, id }: any, ref: any) => {
  return (
    <>
      <NavBarUnderContainer ref={ref} id={id} right={right}>
        <h2>Hello efwbebfjwbefjhwebfjhwbejf</h2>
      </NavBarUnderContainer>
    </>
  );
});

NavBarUnderSection.displayName = 'Search';
export default NavBarUnderSection;
