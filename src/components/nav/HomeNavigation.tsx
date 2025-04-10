import { Link } from 'react-router-dom'
export default function HomeNavigation() {
  return (
    <div className='flex gap-3 '>
        <Link
            className='rounded-xl bg-lime-500 text-slate-800 p-2 uppercase font-black text-xs cursor-pointer'
            to='/auth/login'>Iniciar Sesion</Link>
        <Link
        className='rounded-xl bg-lime-500 text-slate-800 p-2 uppercase font-black text-xs cursor-pointer'
        to='/auth/login'>Crear Cuenta</Link>
    </div>
  )
}
