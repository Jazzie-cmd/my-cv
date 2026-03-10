import { motion } from "framer-motion"

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[999]">

      <motion.h1
        className="text-white text-2xl tracking-[1.3em] font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        LOADING
      </motion.h1>

    </div>
  )
}

export default Loader