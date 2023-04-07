import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { navigationConfig } from '@configs/navigationConfig';
import Link from 'next/link';
import classNames from 'classnames';

interface SubMenuItem {
  title: string;
  url: string;
  icon?: string;
  subMenu?: SubMenuItem[];
}

interface MenuItemProps {
  item: SubMenuItem;
  depth?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, depth = 0 }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // const isActive = router.pathname === item.url;
  const isActive = router.pathname.includes(item.url);

  useEffect(() => {
    if (isActive) {
      setOpen(true);
    }
  }, [isActive]);

  const toggleSubMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="mb-2" key={item.title}>
      {item.subMenu ? (
        <Link
          href="#"
          className={classNames(
            'flex py-2 items-center rounded-md text-gray-200 hover:bg-gray-800',
            isActive && 'bg-red-800',
            depth === 0 ? 'pl-4' : '',
            depth === 1 ? 'pl-8' : '',
            depth === 2 ? 'pl-12' : '',
            depth === 3 ? 'pl-16' : ''
          )}
          onClick={toggleSubMenu}
        >
          {item.icon && (
            <span className="">
              <i className={`bi bi-${item.icon}`}></i>
            </span>
          )}
          <span>{item.title}</span>
          {depth}
          <span className="ml-auto">
            <i className={`bi bi-chevron-${open ? 'up' : 'down'}`}></i>
          </span>
        </Link>
      ) : (
        <Link href={item.url}>
          <span
            className={classNames(
              'flex items-center py-2 rounded-md text-gray-200 hover:bg-gray-800',
              isActive && 'bg-red-800',
              depth === 0 ? 'pl-4' : '',
              depth === 1 ? 'pl-8' : '',
              depth === 2 ? 'pl-12' : '',
              depth === 3 ? 'pl-16' : ''
            )}
          >
            {item.icon && (
              <span className="">
                <i className={`bi bi-${item.icon}`}></i>
              </span>
            )}
            <span>{item.title}</span>
            {depth}
          </span>
        </Link>
      )}
      {item.subMenu && (
        <div className={`${open ? 'block' : 'hidden'}`}>
          {item.subMenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarVerticalItem = () => {
  return (
    <div className="sidebar-vertical__wrapper flex text-base">
      <div className="p-3 w-full overflow-y-auto">
        {navigationConfig.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SidebarVerticalItem;
