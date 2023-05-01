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
import { NavItem, Position } from './NavBar';

export interface NavBarUnderSectionProps {
  item: NavItem;
  parent: NavItem | NavItem[];
  position: Position;
  navTree: NavItem[] | [];
  setBodyWidth: Dispatch<SetStateAction<number>>;
  setDifferencePercentage: Dispatch<SetStateAction<number>>;
  setDropDown: Dispatch<SetStateAction<boolean>>;
  ref:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
}

const NavBarUnderSection = forwardRef(
  (
    props: NavBarUnderSectionProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | RefObject<HTMLDivElement>
      | null
      | undefined
  ) => {
    const {
      setDropDown,
      item,
      setDifferencePercentage,
      setBodyWidth,
      position,
      parent,
      navTree,
    }: NavBarUnderSectionProps = props;
    const children = item.children;
    // const [items, setItems] = useState<Array<any>>(item.children);

    const buttonClick = (e: any, i: any, p: any) => {
      const rightBorderFromLeft = position.left + position.width;

      const addNewTree = navTree ? structuredClone(navTree) : [];
      addNewTree.push(p);

      const isRoot = document.getElementById('--child');
      if (isRoot) isRoot.remove();

      const navBarUnderRoot = document.createElement('div');
      navBarUnderRoot.id = '--child';
      navBarUnderRoot.style.position = 'absolute';
      navBarUnderRoot.style.top = `${position.top + position.height}px`;

      const bodyWidth = document.body.offsetWidth;
      const fromRight = bodyWidth - rightBorderFromLeft;

      const leftPercentage = (position.left / bodyWidth) * 100;
      const rightPercentage = (fromRight / bodyWidth) * 100;

      const findPercentage = leftPercentage - rightPercentage;

      setBodyWidth(bodyWidth);
      setDifferencePercentage(findPercentage);
      document.body.appendChild(navBarUnderRoot);

      const navBarUnder = (
        <NavBarUnderSection
          item={i}
          setDropDown={setDropDown}
          ref={ref}
          position={position}
          setBodyWidth={setBodyWidth}
          setDifferencePercentage={setDifferencePercentage}
          parent={p}
          navTree={addNewTree}
        />
      );
      const root = createRoot(navBarUnderRoot);

      root.render(navBarUnder);
    };

    const buttonBack = (e: any, i: any) => {
      const rightBorderFromLeft = position.left + position.width;

      const removeOneFromTree = structuredClone(navTree);
      removeOneFromTree.pop();

      const isRoot = document.getElementById('--child');
      if (isRoot) isRoot.remove();

      const navBarUnderRoot = document.createElement('div');
      navBarUnderRoot.id = '--child';
      navBarUnderRoot.style.position = 'absolute';
      navBarUnderRoot.style.top = `${position.top + position.height}px`;

      const bodyWidth = document.body.offsetWidth;
      const fromRight = bodyWidth - rightBorderFromLeft;

      const leftPercentage = (position.left / bodyWidth) * 100;
      const rightPercentage = (fromRight / bodyWidth) * 100;

      const findPercentage = leftPercentage - rightPercentage;

      setBodyWidth(bodyWidth);
      setDifferencePercentage(findPercentage);
      document.body.appendChild(navBarUnderRoot);

      const navBarUnder = (
        <NavBarUnderSection
          item={i}
          setDropDown={setDropDown}
          ref={ref}
          position={position}
          setBodyWidth={setBodyWidth}
          setDifferencePercentage={setDifferencePercentage}
          navTree={removeOneFromTree}
          parent={removeOneFromTree[removeOneFromTree.length - 1]}
        />
      );
      const root = createRoot(navBarUnderRoot);

      root.render(navBarUnder);
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
              <NavBarUnderTitleButton onClick={(e) => buttonBack(e, parent)}>
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
                        <NavBarUnderButton
                          onClick={(e) => buttonClick(e, i, item)}
                        >
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
