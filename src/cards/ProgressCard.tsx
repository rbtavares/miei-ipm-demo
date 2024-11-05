import DonutProgress from "@/components/DonutProgress";


interface IProgress {
    progress: number
}
const ProgressCard = ({ progress }: IProgress) => {

    const prog = (progress * 100) / 150

    return (
        <div className="card w-full flex-1 p-3 2xl:p-4 flex flex-col">
            <h1 className="text-3xl font-medium text-white drop-shadow-md">Summary</h1>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-3 px-3 py-2">

                {/* Progress */}
                <div className="w-full text-white flex-1 flex items-center gap-3">
                    <DonutProgress className='drop-shadow-md lg:size-20 2xl:size-32' thickness={10} progress={prog} />
                    <div className="text-white flex flex-col flex-1 items-center justify-center gap-2">
                        <h2 className="text-3xl 2xl:text-4xl font-medium drop-shadow-md">{progress}/150</h2>
                        <h4 className="font-light drop-shadow-md text-sm 2xl:text-base">Total ECTS</h4>
                    </div>
                </div>

                {/* Course */}
                <div className="w-full text-white flex-1 flex flex-col justify-center">
                    <h5 className="text-sm 2xl:text-base opacity-75 drop-shadow-md">Bachelor's Degree</h5>
                    <h1 className="text-2xl 2xl:text-4xl italic drop-shadow-md">Computer Science & Engineering</h1>
                </div>

                {/* Stats */}
                <div className="w-full text-white flex-1 flex items-center">
                    <div>
                        <h5 className="text-sm 2xl:text-base drop-shadow-md">Status</h5>
                        <h2 className="text-2xl 2xl:text-4.5xl drop-shadow-md">Regular</h2>
                    </div>
                    <div className="flex-1 text-end">
                        <h5 className="text-sm 2xl:text-base drop-shadow-md">Avg. Grade</h5>
                        <h2 className="text-2xl 2xl:text-4.5xl drop-shadow-md">13<span className="opacity-40">.37</span></h2>
                    </div>
                </div>


            </div>

            {/* Behind */}
            <h5 className="opacity-80 text-center text-xs 2xl:text-sm text-white drop-shadow-md">0 course(s) behind</h5>

        </div>
    )
}

export default ProgressCard;