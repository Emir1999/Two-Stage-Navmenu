import NavBarMobile from '@/components/NavBarMobile';
import { NavBarMobileProps } from '@/models/props/NavBarMobileProps';
import { hydrateRoot } from 'react-dom/client';

export const createMobileSlider = ({
  items,
  navTree,
  burgerRef,
  animationState,
}: NavBarMobileProps) => {
  const navBarMobileRoot = document.createElement('div');
  navBarMobileRoot.id = '--mobile';

  document.body.appendChild(navBarMobileRoot);

  const navBarUnder = (
    <NavBarMobile
      items={items}
      navTree={navTree}
      burgerRef={burgerRef}
      animationState={animationState}
    />
  );
  hydrateRoot(navBarMobileRoot, navBarUnder);
};
