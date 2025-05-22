import {useState} from 'react'
import { Button } from '../ui/button'

export default function ProfileBlock({userData, setEditProfile}) {

    const [changeUserData, setChangeUserData] = useState(false)

  return (
    <div className='flex justify-between p-[16px] bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]'>
        <div className='flex'>
            <div className='w-[160px] h-[196px]'>
                <img className='object-cover w-full h-[196px] rounded' src={userData.avatar} alt="avatar"/>
            </div>
            <div className='flex flex-col justify-between ml-4'>
                <h1 className='text-[clamp(1.5rem,2vw,1.5rem)]'>{userData.name} {userData.surname}</h1>

                <div className='text-[clamp(1rem,1.5vw,1rem)]'>
                    <h2>{userData.age} лет</h2>
                    <h2>{userData.profession}</h2>
                    <h2>Опыт: {userData.experience}</h2>
                    <h2>{userData.address}</h2>
                </div>

                <div className='text-[clamp(0.875rem,1.2vw,0.875rem)]'>
                    <h3>{userData.telephone}</h3>
                    <h3>{userData.email}</h3>
                </div>
            </div>
        </div>        
        <Button onClick={() => setEditProfile(true)}>Редактировать</Button>
    </div>
  )
}
