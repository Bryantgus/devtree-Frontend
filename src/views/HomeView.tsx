import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

export default function HomeView() {
  return (
    <>
      <Header />
      <main className='bg-gray-100 py-10 min-h-screen bg-home' style={{backgroundImage: 'url(/bg.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: 'contain'}}>
        <div className='max-w-5xl mx-auto mt-10 '>
          <div className='lg:w-1/2 px-10 lg:p-0 space-y-6 '>
            <h1 className='text-6xl font-black '>
                Todas tus <span className='text-cyan-400'>Redes Sociales </span>
                en un enlace 
            </h1>

            <p className='rounded-[10px] text-stale-800 text-xl bg-neutral-300 p-5'>Unete a mas de 200 mil developers compartiendo sus redes sociales, comparte tu perfil de TikTok, Facebook, Instragram, Youtube, Github y mas </p>

            <SearchForm />
          </div>
        </div>
      </main>
    </>
  )
}
