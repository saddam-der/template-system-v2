import classNames from 'classnames';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@store/store';
import { setSidebarActive } from '@store/slices/appSlice';

export default function Topbar() {
  const dispatch = useDispatch<AppDispatch>();
  const sidebarVisible = useSelector(
    (state: RootState) => state.app.themeConfig.layout.sidebar.isActive
  );

  return (
    <div className="topbar-vertical">
      <div
        className={classNames(
          'topbar-vertical__container shadow',
          sidebarVisible ? '' : 'topbar-vertical__collapsed'
        )}
      >
        <div
          className="hover:bg-[#e5e5e5] p-2 cursor-pointer hover:rounded-full"
          onClick={() => dispatch(setSidebarActive(!sidebarVisible))}
        >
          <div className="text-xl">
            <FaBars />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center h-full">
          <div className="relative h-10 w-10">
            <Image
              src="https://via.placeholder.com/150x150"
              className="rounded-full h-full cursor-pointer"
              alt="profile"
              fill
            />
          </div>
          <div
            className={classNames(
              'mr-1 cursor-default flex flex-col'
              // layoutType === 'horizontal' ? 'text-[#EDF2F4]' : ''
            )}
          >
            <div className="text-sm font-semibold">SADDAM DERMAWAN</div>
            <div className="text-xs self-end">SUPER ADMIN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
