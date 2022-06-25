import { FC, ReactNode, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothTopScroll } from 'hooks';

import s from './styles.module.scss';

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const firstPathAtPathname = useMemo(() => pathname.split('/')[1], [pathname]);
  useSmoothTopScroll(firstPathAtPathname);

  return (
    <main className={s.mainContainer}>{children}</main>
  );
};
