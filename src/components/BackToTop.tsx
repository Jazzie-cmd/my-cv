import { useEffect, useState } from "react"
import arrowUp from "/arrow-up.svg"

const BackToTop = () => {

  const [scrollPercent, setScrollPercent] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const percent = scrollTop / docHeight

      setScrollPercent(percent)

      // show only after scrolling
      setVisible(scrollTop > 150)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const radius = 22
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - scrollPercent * circumference

  const scrollTop = () => {
    window.scrollTo({ top: 1, behavior: "smooth" })
  }

  return (

    <button
      onClick={scrollTop}
      className={`fixed bottom-5 right-7 w-14 h-14 flex items-center justify-center z-50 transition-all duration-300
  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
    >

      <svg className="absolute -rotate-90" width="60" height="60">

        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="rgb(255,255,255)"
          strokeWidth="2"
          fill="none"
        />

        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#00ffff"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.15s linear" }}
        />

      </svg>

      <img
        src={arrowUp}
        alt="Back to top"
        className="w-5 h-5 items-center"
      />

    </button>

  )
}

export default BackToTop