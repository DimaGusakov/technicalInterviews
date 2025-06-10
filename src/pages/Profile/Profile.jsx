import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useLazyGetUserQuery } from '@/service/databaseApi';

import ProfileBlock from '@/components/ProfileBlock/ProfileBlock';
import EditingProfile from '@/components/EditingProfile/EditingProfile';

export default function Profile() {
  const user = getAuth().currentUser;
  const [triggerGetUser] = useLazyGetUserQuery();
  const [editProfile, setEditProfile] = useState(false);

  const [userData, setUserData] = useState(() => {
    const cached = localStorage.getItem('userData');
    return cached ? JSON.parse(cached) : {
      avatar: null,
      login: '',
      profession: '',
      experience: '',
      email: '',
    };
  });

  const fetchUserData = async () => {
    if (!user) return;
    try {
      const { data } = await triggerGetUser(user.uid);
      if (data) {
        setUserData(data);
        localStorage.setItem('userData', JSON.stringify(data)); // кэш
      }
    } catch (err) {
      console.error('Failed to load user data', err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleProfileSaved = () => {
    setEditProfile(false);
    fetchUserData();
  };

  const handleCancel = () => {
    setEditProfile(false);
  }

  return (
    <div>
      {!editProfile ? (
        <div className="p-6 grid grid-cols-[63%_35%] gap-2">
          <ProfileBlock userData={userData} setEditProfile={setEditProfile} />
        </div>
      ) : (
        <div className="p-6">
          <EditingProfile
            userData={userData}
            onCancel={handleCancel}
            onSave={handleProfileSaved}
          />
        </div>
      )}
    </div>
  );
}
