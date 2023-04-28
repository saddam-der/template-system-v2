import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export default function Config({ children }: Props) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
