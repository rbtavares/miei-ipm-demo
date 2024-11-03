import DonutProgress from "@/components/DonutProgress";

const ProgressCard = () => {

    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-5">
            <h1 className="text-3xl font-medium text-white">Summary</h1>

            {/* Progress */}
            <div className="flex mx-2">
                <DonutProgress className='drop-shadow-md' thickness={15} progress={75} />
                <div className="text-white flex flex-col flex-1 items-center justify-center gap-2">
                    <h2 className="text-4xl font-medium">133/150</h2>
                    <h4 className="font-light">Total ECTS</h4>
                </div>
            </div>

            {/* Course */}
            <div className="w-full text-white flex-1 flex flex-col justify-end">
                <h5 className="opacity-75">Bachelor's Degree</h5>
                <h1 className="text-4.5xl italic">Computer Science & Engineering</h1>
            </div>

            {/* Stats */}
            <div className="w-full text-white flex-1 flex items-center">
                <div>
                    <h5>Status</h5>
                    <h2 className="text-5xl">Regular</h2>
                </div>
                <div className="flex-1 text-end">
                    <h5>Current Avg. Grade</h5>
                    <h2 className="text-5xl">16.97</h2>
                </div>
            </div>

            {/* Behind */}
            <h5 className="opacity-80 text-center text-sm text-white">0 course(s) behind</h5>

        </div>
    )
}

export default ProgressCard;