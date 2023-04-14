import Image from 'next/image'

export const metadata = {
  title: 'Login',
}

export default function Login() {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-800">
        <div className="bg-gray-300 p-6 rounded-lg bg-gray-100 drop-shadow-lg">
            <h1 className="text-center font-semibold text-4xl text-shadow-sm">Greetings!</h1>
            <p className="text-center">To get started, we need you to log in.</p>
            <Image src="/roket.svg" alt='Roket' width={150} height={150} className='mx-auto py-4' />
            <div className="bg-blue-700 px-5 py-2.5 rounded-lg w-11/12 mx-auto cursor-pointer flex items-center justify-center gap-0.5 mb-2.5">
            <Image src="/DiscordIcon.svg" alt='Discord Icon' width={25} height={25} className='inline'/>
              <span className='text-white font-bold ml-1 text-center'>Discord</span>
            </div>
            <div className="bg-zinc-900 px-5 py-2.5 rounded-lg w-11/12 mx-auto cursor-pointer flex items-center justify-center gap-0.5">
            <Image src="/GithubIcon.svg" alt='Discord Icon' width={25} height={25} className='inline'/>
              <span className='text-white font-bold ml-1 text-center'>GitHub</span>
            </div>
        </div>
      </div>
    )
  }
  