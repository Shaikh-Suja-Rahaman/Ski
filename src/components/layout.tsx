import React, { type PropsWithChildren } from 'react'
import Header from "./header"

const Layout = ({children} : PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
      <Header />
      <main className='min-h-screen container mx-auto px-4 py-8'>
        {children}
      </main>
      <footer className='border-t backdrop-blur py-5 bg-background/60'>
        <div className='container mx-auto px-4 text-center text-gray-400'>
          <p>

           <a
  href="https://github.com/Shaikh-Suja-Rahaman"
  className="underline underline-offset-4 decoration-gray-400 hover:decoration-white transition"
>
             More Projects on my GitHub :)
</a>

          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout