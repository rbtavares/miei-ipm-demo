import DonutProgress from "@/components/DonutProgress";
import { motion } from "framer-motion"

interface IProgress {
    progress: number
}

const animate = {
    opacity: 1
}

const initial = {
    opacity: 0
}

const ProgressCard = ({ progress }: IProgress) => {

    const prog = progress < 150 ? (progress * 100) / 150 : 100

    return (
        <div className="card w-full flex-1 p-3 2xl:p-4 flex flex-col">
            <motion.h1
                initial={initial}
                animate={animate}
                transition={{ duration: 1, delay: 0 }}
                className="header">Summary</motion.h1>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-3 px-3 py-2">

                {/* Progress */}
                <div className="w-full text-white flex-1 flex items-center gap-3">
                    <motion.div
                        initial={initial}
                        animate={animate}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <DonutProgress className='drop-shadow-md lg:size-28 2xl:size-32' thickness={10} progress={prog} />
                    </motion.div>
                    <div className="text-white flex flex-col flex-1 items-center justify-center gap-2">
                        <motion.h2
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-4xl font-medium drop-shadow-md">{progress}/150</motion.h2>
                        <motion.h4
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-light drop-shadow-md text-base">Total ECTS</motion.h4>
                    </div>
                </div>

                {/* Course */}
                <div className="w-full text-white flex-1 flex flex-col justify-center">
                    <motion.h5
                        initial={initial}
                        animate={animate}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base opacity-75 drop-shadow-md">Bachelor's Degree</motion.h5>
                    <motion.h1
                        initial={initial}
                        animate={animate}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-4xl italic drop-shadow-md">Computer Science & Engineering</motion.h1>
                </div>

                {/* Stats */}
                <div className="w-full text-white flex-1 flex items-center">
                    <div>
                        <motion.h5
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-base drop-shadow-md">Status</motion.h5>
                        <motion.h2
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-3xl 2xl:text-4.5xl drop-shadow-md">Regular</motion.h2>
                    </div>
                    <div className="flex-1 text-end">
                        <motion.h5
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-base drop-shadow-md">Avg. Grade</motion.h5>
                        <motion.h2
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="text-3xl 2xl:text-4.5xl drop-shadow-md">13<span className="opacity-40">.37</span></motion.h2>
                    </div>
                </div>


            </div>

            {/* Behind */}
            <motion.h5
                initial={initial}
                animate={{opacity: 0.5}}
                transition={{ duration: 1, delay: 1 }}
                className="opacity-50 text-center text-xs 2xl:text-sm text-white drop-shadow-md">0 course(s) behind</motion.h5>

        </div>
    )
}

export default ProgressCard;