import React, { useRef } from "react";
import { useEffect, useState } from "react";

interface CounterProps {
    end: number;
    duration?: number
}

const Counter = ({ end, duration = 1500 }) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const counterRef = useRef(null)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount()
            setHasAnimated(true)
          }
        },
        { threshold: 0.5 }
      )
  
      if (counterRef.current) {
        observer.observe(counterRef.current)
      }
  
      return () => observer.disconnect()
    }, [hasAnimated])
  
    const animateCount = () => {
      let start = 0
      const increment = end / (duration / 16)
  
      const updateCount = () => {
        start += increment
        if (start < end) {
          setCount(Math.floor(start))
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }
  
      requestAnimationFrame(updateCount)
    }
  
    return (
      <span ref={counterRef}>
        {count.toLocaleString()}+
      </span>
    )
  }
  
  export default Counter