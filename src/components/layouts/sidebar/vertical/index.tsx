import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import Item from './item';
import Logo from './logo';

export default function SidebarVertical() {
  const sidebarVisible = useSelector(
    (state: RootState) => state.app.themeConfig.layout.sidebar.isActive
  );

  return (
    <div
      className={classNames(
        'sidebar-vertical shadow-md',
        sidebarVisible ? '' : 'sidebar-vertical__collapsed'
      )}
    >
      <Logo />
      <Item />
    </div>
  );
}
