import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { NavMainpageIcon, NavProfileIcon, NavEducationIcon } from '@/components/icons';
import { useLazyGetUserQuery } from '@/service/databaseApi';
import { getAuth } from 'firebase/auth';

import TopNavbar from '@/components/TopNavbar/TopNavbar';

export default function ProfileNavigation() {

  const user = getAuth().currentUser;

  const [getUser] = useLazyGetUserQuery();
  const [userData, setUserData] = useState({
    name: "default"
  });
        
    useEffect(() => {
      (async () => {
            if (!user) return;
            try {
              const { data } = await getUser(user?.uid);
              if (data) setUserData(data);
            } catch (err) {
              console.error("Failed to load user data", err);
            }
        })();
    }, []);

  return (
    <div className="flex min-h-screen">
      
      <nav role="navigation" className="flex flex-col gap-2 !p-10 w-62 min-h-screen bg-[var(--sidebar)] text-[var(--sidebar-foreground)] text-[clamp(0.5rem,1.5vw,1.3rem)]">
        <NavLink to="/">
          {({ isActive }) => (
            <div
              className={`rounded-md px-4 py-2 transition-colors flex items-center gap-2 text-black ${
                isActive
                  ? 'bg-[var(--sidebar-accent)] text-purple-700'
                  : 'hover:bg-[var(--sidebar-accent)]'
              }`}
            >
              <NavMainpageIcon
                fill={ isActive ? '#6a0bff' : '#000000'}
                className={"w-6 h-6"}
              />
              Главная
            </div>
          )}
        </NavLink>
        <NavLink to="profile">
          {({ isActive }) => (
            <div
              className={`rounded-md px-4 py-2 transition-colors flex items-center gap-2 text-black ${
                isActive
                  ? 'bg-[var(--sidebar-accent)] text-purple-700'
                  : 'hover:bg-[var(--sidebar-accent)]'
              }`}
            >
              <NavProfileIcon
                fill={ isActive ? '#6a0bff' : '#000000'}
                className={"w-6 h-6"}
              />
              Мой профиль
            </div>
          )}
        </NavLink>
        <NavLink to="learning">
          {({ isActive }) => (
            <div
              className={`rounded-md px-4 py-2 transition-colors flex items-center gap-2 text-black ${
                isActive
                  ? 'bg-[var(--sidebar-accent)] text-purple-700'
                  : 'hover:bg-[var(--sidebar-accent)]'
              }`}
            >
              <NavEducationIcon
                fill={ isActive ? '#6a0bff' : '#000000'}
                className={"w-6 h-6"}
              />
              Обучение
            </div>
          )}
        </NavLink>
      </nav>

      <main className="flex-1 bg-[var(--color-background)]">
        <TopNavbar/>
        <Outlet />
      </main>

    </div>
  );
}
