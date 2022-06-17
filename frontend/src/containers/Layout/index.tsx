import { FC, ReactNode, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, NotificationModal } from 'containers';
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
    <>
      <NotificationModal />
      <Header />

      <main className={s.mainContainer}>{children}</main>
    </>
  );
};
