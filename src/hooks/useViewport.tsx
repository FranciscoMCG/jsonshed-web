import { useEffect, useState } from 'react'

export const isBrowser = () => typeof window !== 'undefined'

export default function useViewport() {
  const [width, setWidth] = useState(isBrowser() && window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  const mobileBreakpoint = 640

  useEffect(() => {
    if (width < mobileBreakpoint) setIsMobile(true)
  }, [width])

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width, isMobile }
}
