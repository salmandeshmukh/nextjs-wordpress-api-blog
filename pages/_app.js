import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { useRouter,router } from 'next/router'
import NavBar from '../components/NavBar'
import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)


  useEffect(()=>{
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  })
  return (
    <>
    <LoadingBar
      color='#f11946'
      waitingTime= {400}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <NavBar />
    <hr />

    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
    <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
