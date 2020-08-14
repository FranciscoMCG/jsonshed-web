import { useEffect, useState } from 'react'

export const isBrowser = () => typeof window !== 'undefined'

export default function useViewport() {
  const isSSR = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : isBrowser() && window.innerWidth,
    height: isSSR ? 800 : isBrowser() && window.innerHeight,
  })
  const [isMobile, setIsMobile] = useState(true)

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    isBrowser() && window.innerWidth > 640
      ? setIsMobile(false)
      : setIsMobile(true)
  }, [windowSize])

  useEffect(() => {
    isBrowser() && window.addEventListener('resize', changeWindowSize)

    return () => {
      isBrowser() && window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return { windowSize, isMobile }
}
