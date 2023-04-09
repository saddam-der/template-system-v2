import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import Topbar from './topbar';
import Sidebar from './sidebar';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const sidebarVisible = useSelector(
    (state: RootState) => state.app.themeConfig.layout.sidebar.isActive
  );

  return (
    <div className="min-h-screen text-sm">
      <Sidebar />
      <Topbar />
      <div
        className={classNames(
          'wrapper',
          sidebarVisible ? '' : 'wrapper__collapsed'
        )}
      >
        {children}
        <Footer />
      </div>
    </div>
  );
}
