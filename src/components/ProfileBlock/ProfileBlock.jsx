import React from 'react'
import img from "../../../image.png"

export default function ProfileBlock() {
  return (
    <div className='flex w-[90%] p-[16px] bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl'>
        <div className='w-[120px] h-[196px]'>
            <img className='object-cover w-full h-[196px] rounded' src={img} alt="avatar"/>
        </div>
        <div className='flex flex-col justify-between ml-4'>
            <h1>Name Surname</h1>

            <div>
                <h2>age</h2>
                <h2>profession</h2>
                <h2>Опыт: exp</h2>
                <h2>Address</h2>
            </div>

            <div>
                <h3>+666 66 666 66 66</h3>
                <h3>emailaddress@gmail.com</h3>
            </div>
        </div>
    </div>
  )
}
