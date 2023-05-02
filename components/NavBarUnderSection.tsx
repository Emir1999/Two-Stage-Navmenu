import { Dispatch, RefObject, SetStateAction, forwardRef } from 'react';
import { createRoot } from 'react-dom/client';
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
import { Position } from './NavBar';
import { NavItem } from '@/models/NavItem';
import { NavBarUnderSectionProps } from '@/models/props/NavBarUnderSectionProps';
import { createUnderSection } from '@/lib/hooks/createUnderSection';

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
    }: NavBarUnderSectionProps = props;

    const children: NavItem[] = item.children;

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
      };

      createUnderSection({ ...underSectionProps });
    };

    const buttonBack = (i: NavItem | NavItem[]) => {
      const rightBorderFromLeft = position.left + position.width;

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
      };

      createUnderSection({ ...underSectionProps });
    };

    return (
      <>
        <NavBarUnderContainer
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
          id={item.id + '--under'}
          ref={ref}
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
                    <NavBarUnderName hasChildren={i.children?.length > 0}>
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
      </>
    );
  }
);

NavBarUnderSection.displayName = 'NavBarUnderSection';
export default NavBarUnderSection;
