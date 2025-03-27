import React from 'react'
import Sticker1 from '@/img/image1.png'
import Sticker2 from '@/img/image2.png'
import Sticker3 from '@/img/image3.png'
import StickerCop from '@/components/StickerCop'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  const stickers = [
    {
      id: 'sticker1',
      frameCount: 20,
      frameRate: 10,
      framesPerCol: 4,
      framesPerRow: 5,
      spriteImg: Sticker1,
    },
    {
      id: 'sticker2',
      frameCount: 6,
      frameRate: 12,
      framesPerCol: 2,
      framesPerRow: 3,
      spriteImg: Sticker2,
    },
    {
      id: 'sticker3',
      frameCount: 9,
      frameRate: 10,
      framesPerCol: 3,
      framesPerRow: 3,
      spriteImg: Sticker3,
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4'>
      <div className='w-full max-w-3xl'>
        <h1 className='text-3xl font-bold text-center text-indigo-600 mb-8'>
          Interactive Stickers (Like Facebook)
        </h1>

        <div className='grid grid-cols-1 w-fit mx-auto bg-white p-2 rounded-xl sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6'>
          {stickers.map((sticker) => (
            <StickerCop
              key={sticker.id}
              id={sticker.id}
              frameCount={sticker.frameCount}
              frameRate={sticker.frameRate}
              framesPerCol={sticker.framesPerCol}
              framesPerRow={sticker.framesPerRow}
              spriteImg={sticker.spriteImg.src}
            />
          ))}
        </div>
        <Link href='/' className='block w-fit mx-auto mb-4'>
          <button className='px-2 w-fit mx-auto py-1 h-10 bg-black text-white rounded-xl'>
            Source code
          </button>
        </Link>
        <div className='mt-10 bg-white rounded-xl shadow-md p-6 border border-gray-200'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div className='w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center'>
              <Image
                src='https://avatars.githubusercontent.com/u/121950007?v=4'
                alt='Avatar'
                width={128}
                height={128}
                className='rounded-full'
              />
            </div>

            <div className='flex-1'>
              <div className='text-center md:text-left'>
                <h2 className='text-2xl font-bold text-gray-800'>Hi 👋, I'm Triệu Tiến Đạt</h2>
                <p className='text-lg text-indigo-600 font-medium mb-3'>A Frontend Developer 👨‍💻</p>

                <div className='space-y-2 text-gray-600'>
                  <p>🔭 I'm currently a Web Developer, a Frontend Developer.</p>
                  <p>
                    👨‍💻 All of my projects are available at{' '}
                    <Link href='https://github.com/tiendat2204' className='text-indigo-600 hover:underline'>
                      tiendat220404
                    </Link>
                  </p>
                  <p>💬 Ask me about ReactJs, Angular, JavaScript, HTML, CSS, Tailwind CSS, MongoDB, Express, Bootstrap, TypeScript, Django, Python</p>
                  <p>
                    📫 How to reach me:{' '}
                    <Link href='mailto:Tiendat220404@gmail.com' className='text-indigo-600 hover:underline'>
                      Tiendat220404@gmail.com
                    </Link>
                  </p>
                </div>
              </div>

              <div className='mt-4 flex justify-center md:justify-start gap-4'>
                <Link href='https://github.com/tiendat2204' className='text-gray-600 hover:text-black' aria-label='GitHub'>
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
                <a href='mailto:Tiendat220404@gmail.com' className='text-gray-600 hover:text-indigo-600' aria-label='Email'>
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='mt-6 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm' suppressHydrationWarning>
            © {new Date().getFullYear()} Triệu Tiến Đạt. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
