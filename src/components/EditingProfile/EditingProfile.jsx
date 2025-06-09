import { useState } from 'react';
import { Button } from '../ui/button';
import { useUpdateUserMutation } from '@/service/databaseApi';
import { getAuth } from 'firebase/auth';

export default function EditingProfile({ userData, onCancel, onSave }) {
  const [newName, setNewName] = useState({
    avatar: userData?.avatar || null,
    name: userData?.name || '',
    surname: userData?.surname || '',
    age: userData?.age || '',
    profession: userData?.profession || '',
    experience: userData?.experience || ''
  });

  const user = getAuth().currentUser;
  const [updateUser] = useUpdateUserMutation();
  const [loadingImage, setLoadingImage] = useState(false);

  const professions = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Mobile Developer',
    'DevOps Engineer',
    'Data Scientist',
    'Machine Learning Engineer',
    'Game Developer',
    'Cybersecurity Specialist',
    'QA Engineer',
  ];

  const experienceLevels = ['Junior', 'Middle', 'Senior'];

  const changeUserData = async (e) => {
    e.preventDefault();

    const updates = {};
    if (newName.avatar.trim() !== "") updates.avatar = newName.avatar;
    if (newName.name.trim() !== "") updates.name = newName.name;
    if (newName.surname.trim() !== "") updates.surname = newName.surname;
    if (newName.profession.trim() !== "") updates.profession = newName.profession;
    if (newName.experience.trim() !== "") updates.experience = newName.experience;

    try {
      await updateUser({
        uid: user.uid,
        updates,
      });

      if (onSave) onSave();

    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoadingImage(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'technicalInterviews_avatars');

        try {
        const res = await fetch('https://api.cloudinary.com/v1_1/drgjiis7d/image/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();
        setNewName(prev => ({ ...prev, avatar: data.secure_url }));
        } catch (err) {
        console.error('Upload failed', err);
        } finally {
        setLoadingImage(false);
        }
    };

  return (
    <div className="flex flex-col gap-4 p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)] w-full max-w-[600px]">
      <h1 className="text-xl font-semibold mb-2">Редактировать профиль</h1>

      <form onSubmit={changeUserData}>
        <div className="flex flex-col">
          <span className="mb-1">Аватар:</span>
          {newName?.avatar ? (
            <img
              src={newName.avatar}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full border border-gray-300 mb-2"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-2 text-gray-400 text-sm">
              Нет изображения
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-[var(--color-border)] file:text-gray-700 hover:file:bg-[var(--color-muted)]"
          />
        </div>

        <label className="flex flex-col">
          <span>Имя:</span>
          <input
            type="text"
            placeholder="Имя"
            value={newName.name}
            onChange={(e) => setNewName({ ...newName, name: e.target.value })}
            className="input-style"
          />
        </label>

        <label className="flex flex-col">
          <span>Фамилия:</span>
          <input
            type="text"
            placeholder="Фамилия"
            value={newName.surname}
            onChange={(e) => setNewName({ ...newName, surname: e.target.value })}
            className="input-style"
          />
        </label>

        <label className="flex flex-col">
          <span>Специализация:</span>
          <select
            value={newName.profession}
            onChange={(e) => setNewName({ ...newName, profession: e.target.value })}
            className="input-style"
          >
            <option value="">Выберите специализацию</option>
            {professions.map((profession) => (
              <option key={profession} value={profession}>
                {profession}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          <span>Уровень:</span>
          <select
            value={newName.experience}
            onChange={(e) => setNewName({ ...newName, experience: e.target.value })}
            className="input-style"
          >
            <option value="">Выберите уровень</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>

        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" onClick={onCancel} type="button">
            Отмена
          </Button>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </div>
  );
}
