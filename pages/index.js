import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <p className='text-red-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minus
          debitis vel laborum sequi reiciendis nisi expedita animi temporibus?
          Cumque vitae temporibus beatae? Minus illo consequatur blanditiis,
          culpa excepturi officia.
        </p>
      </main>
    </div>
  )
}
