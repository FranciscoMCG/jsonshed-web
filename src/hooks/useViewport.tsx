import { useEffect, useState } from 'react'

export const isBrowser = () => typeof window !== 'undefined'

export default function useViewport() {
  const isSSR = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : isBrowser() && window.innerWidth,
  })
  const [isMobile, setIsMobile] = useState(false)

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth })
  }

  useEffect(() => {
    isBrowser() && window.innerWidth > 640
      ? setIsMobile(false)
      : setIsMobile(true)
  }, [windowSize.width])

  useEffect(() => {
    isBrowser() && window.addEventListener('resize', changeWindowSize)

    return () => {
      isBrowser() && window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return { windowSize, isMobile }
}
