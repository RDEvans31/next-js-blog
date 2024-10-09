'use client'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function ProfilePic() {
    return (
      <motion.div
        className="box mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      <Image
        aria-hidden
        src="/profile_pic.jpg"
        alt="Picture of me."
        width={420}
        height={420}
        className="rounded-full"
      />
    </motion.div>
    );
  }
