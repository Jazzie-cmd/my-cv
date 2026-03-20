import { motion } from "framer-motion"

const Loader = () => {
  const text = "LOADING"

  return (
    <motion.div
      className="fixed inset-0 bg-[#020617] flex items-center justify-center z-999"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} // slide up
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Letters */}
      <div className="flex gap-4">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="text-2xl font-light font-serif"
            initial={{ color: "#374151" }}
            animate={{
              color: ["#374151", "#e5e7eb", "#374151"]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Optional curved bottom (nice effect) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#020617] rounded-t-[100%]" />
    </motion.div>
  )
}

export default Loader