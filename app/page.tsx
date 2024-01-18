'use client';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col items-center'>
        <h1>BEM VINDO AO DONTPAD</h1>

        <div
          className='mt-4'
        >
          <input type="text" placeholder="Digite o nome da página"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg rounded-r-none text-sm focus:outline-none "
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const input = document.querySelector('input')
              const value = input?.value
              if (value) {
                window.location.href = `/${value}`
              }
            }}
          >Ir</button>
        </div>
      </div>
    </main>
  )
}
