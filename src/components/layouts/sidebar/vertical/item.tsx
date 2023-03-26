import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { navigationConfig } from '@configs/navigationConfig';
import Link from 'next/link';

interface SubMenuItem {
  title: string;
  url: string;
  icon?: string;
  subMenu?: SubMenuItem[];
}

interface SubMenuProps {
  subMenu: SubMenuItem[];
}

function SubMenu({ subMenu }: SubMenuProps): JSX.Element {
  const [activeSubMenu, setActiveSubMenu] = useState<string[]>([]);

  const handleSubMenuClick = (subItemTitle: string) => {
    if (activeSubMenu.includes(subItemTitle)) {
      setActiveSubMenu(activeSubMenu.filter((title) => title !== subItemTitle));
    } else {
      setActiveSubMenu([...activeSubMenu, subItemTitle]);
    }
  };

  return (
    <ul className="pl-4 mt-2">
      {subMenu.map((subItem) => (
        <li key={subItem.title} className="py-2 hover:bg-gray-100">
          {subItem.subMenu ? (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleSubMenuClick(subItem.title)}
            >
              <span>{subItem.title}</span>
              <i
                className={`ml-auto ${
                  activeSubMenu.includes(subItem.title)
                    ? 'fa fa-caret-up'
                    : 'fa fa-caret-down'
                } text-xs`}
              />
            </div>
          ) : (
            <Link href={subItem.url}>
              <span>{subItem.title}</span>
            </Link>
          )}
          {subItem.subMenu && activeSubMenu.includes(subItem.title) && (
            <SubMenu subMenu={subItem.subMenu} />
          )}
        </li>
      ))}
    </ul>
  );
}

interface NavigationItemProps {
  item: SubMenuItem;
  isActive: boolean;
  onClick: () => void;
}

function NavigationItem({
  item,
  isActive,
  onClick,
}: NavigationItemProps): JSX.Element {
  return (
    <div className="flex items-center cursor-pointer py-2" onClick={onClick}>
      {item.icon && <i className={`${item.icon} text-lg leading-none mr-2`} />}
      <span className={isActive ? 'font-medium bg-gray-600' : ''}>
        {item.title}
      </span>
      {item.subMenu && (
        <i
          className={`ml-auto ${
            isActive ? 'fa fa-caret-up' : 'fa fa-caret-down'
          } text-xs`}
        />
      )}
    </div>
  );
}

export default function SidebarVerticalItem(): JSX.Element {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    // const activeSubMenu = navigationConfig.find(
    //   (item) =>
    //     item.subMenu && item.subMenu.some((subItem) => subItem.url === pathname)
    // );
    // if (activeSubMenu) {
    //   setActiveItem(activeSubMenu.title);
    // }
    navigationConfig.map((item) => {
      if (item.url === pathname) {
        setActiveItem(item.url);
      }
      if (item.subMenu) {
        item.subMenu.map((subItem) => {
          if (subItem.url === pathname) {
            setActiveItem(subItem.url);
          }
          if (subItem.subMenu) {
            subItem.subMenu.map((subSubItem) => {
              if (subSubItem.url === pathname) {
                setActiveItem(subSubItem.url);
              }
              if (subSubItem.subMenu) {
                subSubItem.subMenu.map((subSubSubItem) => {
                  if (subSubSubItem.url === pathname) {
                    setActiveItem(subSubSubItem.url);
                  }
                });
              }
            });
          }
        });
      }
    });
  }, [router]);

  const handleItemClick = (itemTitle: string) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === itemTitle ? '' : itemTitle
    );
  };

  return (
    <div className="sidebar-vertical__wrapper flex text-base">
      <div className="p-3 w-full overflow-y-auto " ref={dropdownRef}>
        {activeItem}
        {navigationConfig.map((item) => (
          <div key={item.title}>
            {item.subMenu ? (
              <NavigationItem
                item={item}
                isActive={activeItem === item.url}
                onClick={() => handleItemClick(item.url)}
              />
            ) : (
              <div className="flex items-center cursor-pointer py-2">
                {item.icon && (
                  <i className={`${item.icon} text-lg leading-none mr-2`} />
                )}
                <Link href={item.url}>
                  <span
                    className={activeItem === item.url ? 'font-medium' : ''}
                  >
                    {item.title}
                  </span>
                </Link>
              </div>
            )}
            {item.subMenu && activeItem.includes(item.url) && (
              <SubMenu subMenu={item.subMenu} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
