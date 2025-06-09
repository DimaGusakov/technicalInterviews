import { useEffect, useState } from 'react';
import { SettingsIcon, DefaultUserIcon } from '../icons';
import { useLazyGetUserQuery } from '@/service/databaseApi';
import { getAuth } from 'firebase/auth';

export default function TopNavbar() {
  const [getUser] = useLazyGetUserQuery();
  const [userData, setUserData] = useState(null);

  const user = getAuth().currentUser;

  useEffect(() => {
    (async () => {
      if (!user?.uid) return;

      try {
        const { data } = await getUser(user.uid);
        if (data) setUserData(data);
      } catch (err) {
        console.error("Failed to load user data", err);
      }
    })();
  }, [user]);

  return (
    <div className='flex h-19 items-center justify-end !p-[14px_20px] gap-[11px] bg-[var(--color-sidebar)]'>
      <SettingsIcon />
        {userData?.avatar ? (
            <div className='w-[40px] h-[40px]'>
            <img
                className='object-cover w-full h-10 rounded-full'
                src={userData.avatar}
                alt="User"
            />
            </div>
        ) : (
          <DefaultUserIcon />
        )}
    </div>
  );
}
