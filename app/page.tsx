'use client';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl'>BEM VINDO AO ANONYPAD</h1>

        <div
          className='mt-8 flex'
        >
          <input type="text" placeholder="Digite o nome da página"
            className="border-2 border-gray-300 bg-white h-16 px-5 pr-16 text-lg rounded-l-md focus:outline-none border-r-0"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const input = document.querySelector('input')
                const value = input?.value
                if (value) {
                  window.location.href = `/${value}`
                }
              }
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-16 text-lg py-2 px-4 rounded-r-md"
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
