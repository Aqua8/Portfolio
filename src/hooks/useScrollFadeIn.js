import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function useScrollFadeIn(delay = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return {
    ref,
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }
}
