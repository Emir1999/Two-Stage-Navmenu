import {
  CloseButton,
  HorizontalLine,
  ImageContainer,
  ImageStyled,
  NavBarMobileContainer,
  NavBarMobileXIcon,
  Overlay,
} from 'styles/NavBarMobileStyles';
import {
  NavBarItems,
  NavBarUnderButton,
  NavBarUnderChevronBack,
  NavBarUnderChevronRight,
  NavBarUnderItem,
  NavBarUnderName,
  NavBarUnderNameSpan,
  NavBarUnderTitle,
  NavBarUnderTitleButton,
  NavBarUnderTitleSection,
  SectionLine,
} from 'styles/NavBarUnderSectionStyles';

import { AnimationState } from '@/models/props/NavBarUnderSectionProps';
import { NavBarMobileProps } from '@/models/props/NavBarMobileProps';
import { NavItem } from '@/models/NavItem';
import bucherLogo from '@/public/bucherLogo.svg';
import { createMobileSlider } from '@/lib/hooks/createMobileSlider';
import { useRef } from 'react';

export default function NavBarMobile({
  items,
  navTree,
  burgerRef,
  animationState,
}: NavBarMobileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const navMobileRef = useRef<HTMLDivElement>(null);

  const mobileForwardButton = (i: NavItem, p: NavItem | NavItem[]) => {
    const addNewTree = navTree ? structuredClone(navTree) : [];
    addNewTree.push(p as NavItem);

    const isRoot = document.getElementById('--mobile');
    if (isRoot) isRoot.remove();

    createMobileSlider({
      items: i,
      navTree: addNewTree,
      burgerRef,
      animationState: AnimationState.FORWARD,
    });
  };

  const children: NavItem | NavItem[] =
    navTree.length > 0 ? (items as NavItem).children : items;

  const mobileBackButton = () => {
    const removeOneFromTree = structuredClone(navTree);

    const isRoot = document.getElementById('--mobile');
    if (isRoot) isRoot.remove();

    createMobileSlider({
      items: removeOneFromTree[removeOneFromTree.length - 1],
      navTree: removeOneFromTree,
      burgerRef,
      animationState: AnimationState.BACK,
    });

    removeOneFromTree.pop();
  };

  let initial;
  switch (animationState) {
    case AnimationState.BACK:
      initial = { x: 40, opacity: 0 };
      break;
    case AnimationState.FORWARD:
      initial = { x: -40, opacity: 0 };
      break;
  }

  return (
    <>
      <Overlay
        ref={ref}
        onClick={(e) => {
          if (e.target === ref.current) {
            const isRoot = document.getElementById('--mobile');
            const currentBurger: HTMLButtonElement | null = burgerRef.current;

            navMobileRef?.current?.classList.add('move-left');

            if (!isRoot) return;
            setTimeout(() => {
              currentBurger?.classList.remove('change');
              isRoot.remove();
            }, 250);
          }
        }}
      >
        <NavBarMobileContainer
          initial={
            animationState == AnimationState.INIT
              ? { x: -40, opacity: 0 }
              : undefined
          }
          animate={{ x: 0, opacity: 1 }}
          ref={navMobileRef}
        >
          <ImageContainer>
            <ImageStyled src={bucherLogo} alt="Logo" width={100} height={20} />
            <CloseButton
              onClick={() => {
                const isRoot = document.getElementById('--mobile');
                const currentBurger: HTMLButtonElement | null =
                  burgerRef.current;

                navMobileRef?.current?.classList.add('move-left');

                if (!isRoot) return;
                setTimeout(() => {
                  currentBurger?.classList.remove('change');
                  isRoot.remove();
                }, 250);
              }}
            >
              <NavBarMobileXIcon />
            </CloseButton>
          </ImageContainer>

          <HorizontalLine />

          {navTree.length > 0 ? (
            <NavBarUnderTitleSection>
              <NavBarUnderTitleButton onClick={() => mobileBackButton()}>
                <NavBarUnderChevronBack />
              </NavBarUnderTitleButton>
              <NavBarUnderTitle>{(items as NavItem).title}</NavBarUnderTitle>
            </NavBarUnderTitleSection>
          ) : null}
          <NavBarItems initial={initial} animate={{ x: 0, opacity: 1 }}>
            {children
              ? (children as NavItem[]).map((i: NavItem, index: number) => (
                  <NavBarUnderItem key={index}>
                    <NavBarUnderName hasChildren={i.children?.length > 0}>
                      <NavBarUnderNameSpan>{i.title}</NavBarUnderNameSpan>
                    </NavBarUnderName>
                    {i.children?.length > 0 ? (
                      <>
                        <SectionLine />
                        <NavBarUnderButton
                          onClick={() => mobileForwardButton(i, items)}
                        >
                          <NavBarUnderChevronRight />
                        </NavBarUnderButton>
                      </>
                    ) : null}
                  </NavBarUnderItem>
                ))
              : null}
          </NavBarItems>
        </NavBarMobileContainer>
      </Overlay>
    </>
  );
}
