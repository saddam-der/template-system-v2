import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

export default function SidebarVerticalLogo() {
  const appName = useSelector(
    (state: RootState) => state.app.themeConfig.app.appName
  );
  console.log(appName);

  return (
    <div className="flex justify-center items-center bg-[#222831] h-[70px]">
      {/* <img src={Logo} alt="" className="ml-4" style={{ height: "75%" }} /> */}
      <h1 className="text-2xl font-bold text-[#EDF2F4]">{appName}</h1>
    </div>
  );
}
