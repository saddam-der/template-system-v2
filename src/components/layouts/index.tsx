import Topbar from './topbar';
import Sidebar from './sidebar';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen text-sm">
      <Sidebar />
      <Topbar />
      {children}
    </div>
  );
}
