import { Button } from "../ui/button"

export default function EditingProfile({userData, setEditProfile}) {
  return (
    <div className='flex flex-col justify-between p-[16px] bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]'>
        <h1>Редактирвание профиля</h1>
        <form>
            <input type="text" placeholder="пока что тут ничего нет"/>
        </form>
        <Button className="w-28" onClick={() => setEditProfile(false)}>Подтвердить</Button>
    </div>
  )
}
