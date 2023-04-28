import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import Topbar from './topbar';
import Sidebar from './sidebar';
import Footer from './footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  out: {
    opacity: 0.25,
    // y: 40,
    // transition: {
    //   duration: 0.75,
    // },
  },
  in: {
    opacity: 1,
    // y: 0,
    // transition: {
    //   duration: 0.75,
    //   delay: 0.5,
    // },
  },
};

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();

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
        <AnimatePresence>
          <motion.div
            key={router.route}
            variants={variants}
            initial="out"
            animate="in"
            exit="out"
          >
            {children}
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
