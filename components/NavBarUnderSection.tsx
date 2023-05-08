import {
  AnimationState,
  NavBarUnderSectionProps,
} from '@/models/props/NavBarUnderSectionProps';
import {
  NavBarItems,
  NavBarUnderButton,
  NavBarUnderChevronBack,
  NavBarUnderChevronRight,
  NavBarUnderContainer,
  NavBarUnderItem,
  NavBarUnderName,
  NavBarUnderNameSpan,
  NavBarUnderTitle,
  NavBarUnderTitleButton,
  NavBarUnderTitleSection,
  SectionLine,
} from 'styles/NavBarUnderSectionStyles';

import { NavItem } from '@/models/NavItem';
import { createUnderSection } from '@/lib/hooks/createUnderSection';
import { forwardRef, useEffect, useState } from 'react';

const NavBarUnderSection = forwardRef(
  (props: NavBarUnderSectionProps, ref: NavBarUnderSectionProps['ref']) => {
    const {
      setDropDown,
      item,
      setDifferencePercentage,
      setBodyWidth,
      position,
      parent,
      navTree,
      animationState,
    }: NavBarUnderSectionProps = props;

    const children: NavItem[] = item.children;
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    const buttonClick = (i: NavItem, p: NavItem) => {
      const addNewTree: NavItem[] | [] = navTree
        ? structuredClone(navTree)
        : [];

      addNewTree.push(p);

      const isRoot = document.getElementById('--child');
      if (isRoot) isRoot.remove();

      const underSectionProps: NavBarUnderSectionProps = {
        item: i,
        setDropDown,
        ref,
        position,
        setBodyWidth,
        setDifferencePercentage,
        parent: p,
        navTree: addNewTree,
        animationState: AnimationState.FORWARD,
      };

      createUnderSection({ ...underSectionProps });
    };

    const buttonBack = (i: NavItem | NavItem[]) => {
      const removeOneFromTree: NavItem[] | [] = structuredClone(navTree);
      removeOneFromTree.pop();

      const isRoot = document.getElementById('--child');

      if (isRoot) isRoot.remove();

      const underSectionProps: NavBarUnderSectionProps = {
        item: i as NavItem,
        setDropDown,
        ref,
        position,
        setBodyWidth,
        setDifferencePercentage,
        parent: removeOneFromTree[removeOneFromTree.length - 1],
        navTree: removeOneFromTree,
        animationState: AnimationState.BACK,
      };

      createUnderSection({ ...underSectionProps });
    };

    let initial;

    switch (animationState) {
      case AnimationState.BACK:
        initial = { x: -40, opacity: 0 };
        break;
      case AnimationState.FORWARD:
        initial = { x: 40, opacity: 0 };
        break;
      case AnimationState.INIT:
        initial = { y: 40, opacity: 0 };
        break;
    }

    useEffect(() => {
      // Updating a state causes a re-render
      setInitialRenderComplete(true);
    }, []);

    return initialRenderComplete ? (
      <NavBarUnderContainer
        layout
        initial={initial}
        animate={{ x: 0, y: 0, opacity: 1 }}
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
        ref={ref}
        id={
          (parent as NavItem)?.id
            ? (parent as NavItem)?.id + '--under'
            : item.id + '--under'
        }
      >
        {navTree.length > 0 ? (
          <NavBarUnderTitleSection>
            <NavBarUnderTitleButton onClick={() => buttonBack(parent)}>
              <NavBarUnderChevronBack />
            </NavBarUnderTitleButton>
            <NavBarUnderTitle>{item.title}</NavBarUnderTitle>
          </NavBarUnderTitleSection>
        ) : null}
        <NavBarItems>
          {children
            ? children.map((i: any, index: number) => (
                <NavBarUnderItem key={index}>
                  <NavBarUnderName
                    href={'/' + i.link}
                    hasChildren={i.children?.length > 0}
                  >
                    <NavBarUnderNameSpan>{i.title}</NavBarUnderNameSpan>
                  </NavBarUnderName>
                  {i.children?.length > 0 ? (
                    <>
                      <SectionLine />
                      <NavBarUnderButton onClick={() => buttonClick(i, item)}>
                        <NavBarUnderChevronRight />
                      </NavBarUnderButton>
                    </>
                  ) : null}
                </NavBarUnderItem>
              ))
            : null}
        </NavBarItems>
      </NavBarUnderContainer>
    ) : null;
  }
);

NavBarUnderSection.displayName = 'NavBarUnderSection';
export default NavBarUnderSection;
