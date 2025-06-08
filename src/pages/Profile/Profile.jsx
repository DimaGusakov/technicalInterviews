import {useState} from 'react'

import img from "../../../image1.jpg"

import ProfileBlock from '@/components/ProfileBlock/ProfileBlock'
import Achievements from '@/components/Achievements/Achievements'
import EditingProfile from '@/components/EditingProfile/EditingProfile'
import ExtraInfoBlock from '@/components/ExtraInfoBlock/ExtraInfoBlock'

export default function Profile() {
  const [userData, setUserData] = useState({
      avatar: img,
      name: "Имя",
      surname: "Фамилия",
      profession: "frontend",
      experience: "Junior",
      telephone: "+666 66 666 66 66",
      email: "emailaddress@gmail.com",
      extraInfo: {
        aboutMe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi et laudantium sequi sint? Natus nulla excepturi at vero praesentium?",
        projects: [
          {
            name: "Burger",
            img: img,
            discription: "Lorem ipsum dolor sit amet"
          },

          {
            name: "Not Burger",
            img: img,
            discription: "Lorem ipsum dolor sit amet"
          }
        ]
      }
  })

  const [editProfile, setEditProfile] = useState(false);

  return (
    <div>
        {!editProfile ? (
              <div className='p-6 grid grid-cols-[63%_35%] gap-2'>
                <ProfileBlock userData={userData} setEditProfile={setEditProfile}/>
                {/* <Achievements/>
                  <div className="flex flex-col gap-2">
                    {userData.extraInfo.aboutMe && (
                      <ExtraInfoBlock status="aboutMe" label="Обо мне" content={userData.extraInfo.aboutMe} />
                    )}

                    {userData.extraInfo.projects && (
                      <ExtraInfoBlock status="projects" label="Мои проекты" content={userData.extraInfo.projects} />
                    )}
                  </div> */}
            </div>
        ) : (
          <div className='p-6'>
            <EditingProfile userData={userData} setEditProfile={setEditProfile}/>
          </div>
        )
        }
    </div>

  )
}
