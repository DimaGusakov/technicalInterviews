import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { MainUserIcon } from '../icons';
import { useLazyGetUserQuery } from '@/service/databaseApi';

export default function ProfileBlock({ userData, setEditProfile }) {

  return (
    <div className="flex justify-between p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]">
      <div className="flex">
        <div className="w-[160px] h-[196px] flex items-center justify-center overflow-hidden bg-gray-100 rounded">
        {userData?.avatar ? (
            <img
            src={userData.avatar}
            alt="avatar"
            className="w-full h-full object-cover"
            />
        ) : (
            <MainUserIcon className="w-24 h-24 text-gray-400" />
        )}
        </div>

        <div className="flex flex-col justify-between ml-4">
          <h1 className="text-[clamp(1.5rem,2vw,1.5rem)] font-medium">
            {userData?.name } {userData?.surname || ''}
          </h1>

          <div className="text-[clamp(1rem,1.5vw,1rem)]">
            <h2>Специализация: {userData?.profession || 'N/A'}</h2>
            <h2>Уровень: {userData?.experience || 'N/A'}</h2>
          </div>

          <div className="text-[clamp(0.875rem,1.2vw,0.875rem)] text-gray-600">
            <h3>{userData?.email || 'Email отсутствует'}</h3>
          </div>
        </div>
      </div>

      <Button onClick={() => setEditProfile(true)}>Редактировать</Button>
    </div>
  );
}
