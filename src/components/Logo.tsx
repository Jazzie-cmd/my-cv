const Logo = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#22d3ee"
        strokeWidth="4"
        fill="none"
      />

      {/* Text */}
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="28"
        fontWeight="700"
        fill="#22d3ee"
        fontFamily="Poppins, sans-serif"
      >
        JZ
      </text>
    </svg>
  )
}

export default Logo