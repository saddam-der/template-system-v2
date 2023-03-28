import Topbar from './topbar';
import Sidebar from './sidebar';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen text-sm">
      <Sidebar />
      <Topbar />
      <div className="wrapper">
        {children}
        <Footer />
      </div>
    </div>
  );
}
