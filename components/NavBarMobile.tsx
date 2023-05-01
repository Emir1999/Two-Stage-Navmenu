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
import bucherLogo from '@/public/bucherLogo.svg';
import { createRoot } from 'react-dom/client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBarMobile({
  items,
  depth,
  navTree,
  burgerRef,
}: any) {
  const ref = useRef<HTMLDivElement>(null);

  const mobileForwardButton = (e: any, i: any, p: any) => {
    const addNewTree = navTree ? structuredClone(navTree) : [];
    addNewTree.push(p);

    const isRoot = document.getElementById('--mobile');
    if (isRoot) isRoot.remove();

    const navBarMobileRoot = document.createElement('div');
    navBarMobileRoot.id = '--mobile';

    document.body.appendChild(navBarMobileRoot);

    const navBarUnder = (
      <NavBarMobile
        items={i}
        depth={depth + 1}
        navTree={addNewTree}
        burgerRef={burgerRef}
      />
    );
    const root = createRoot(navBarMobileRoot);

    root.render(navBarUnder);
  };

  const children = depth > 0 ? items.children : items;

  const mobileBackButton = (e: any, i: any) => {
    const removeOneFromTree = structuredClone(navTree);

    const isRoot = document.getElementById('--mobile');
    if (isRoot) isRoot.remove();

    const navBarMobileRoot = document.createElement('div');
    navBarMobileRoot.id = '--mobile';

    document.body.appendChild(navBarMobileRoot);

    const navBarUnder = (
      <NavBarMobile
        items={removeOneFromTree[removeOneFromTree.length - 1]}
        depth={depth - 1}
        navTree={removeOneFromTree}
        burgerRef={burgerRef}
      />
    );
    removeOneFromTree.pop();

    const root = createRoot(navBarMobileRoot);

    root.render(navBarUnder);
  };

  return (
    <>
      <Overlay
        ref={ref}
        onClick={(e) => {
          if (e.target === ref.current) {
            const isRoot = document.getElementById('--mobile');
            if (!isRoot) return;
            burgerRef.current.classList.remove('change');
            isRoot.remove();
          }
        }}
      >
        <NavBarMobileContainer>
          <ImageContainer>
            <ImageStyled src={bucherLogo} alt="Logo" width={100} height={20} />
            <CloseButton
              onClick={() => {
                const isRoot = document.getElementById('--mobile');
                if (!isRoot) return;
                burgerRef.current.classList.remove('change');
                isRoot.remove();
              }}
            >
              <NavBarMobileXIcon />
            </CloseButton>
          </ImageContainer>

          <HorizontalLine />

          {depth > 0 ? (
            <NavBarUnderTitleSection>
              <NavBarUnderTitleButton
                onClick={(e) => mobileBackButton(e, items)}
              >
                <NavBarUnderChevronBack />
              </NavBarUnderTitleButton>
              <NavBarUnderTitle>{items.name}</NavBarUnderTitle>
            </NavBarUnderTitleSection>
          ) : null}
          <NavBarItems>
            {children
              ? children.map((i: any, index: number) => (
                  <NavBarUnderItem key={index}>
                    <NavBarUnderName hasChildren={i.children?.length > 0}>
                      <NavBarUnderNameSpan>{i.name}</NavBarUnderNameSpan>
                    </NavBarUnderName>
                    {i.children?.length > 0 ? (
                      <>
                        <SectionLine />
                        <NavBarUnderButton
                          onClick={(e) => mobileForwardButton(e, i, items)}
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
