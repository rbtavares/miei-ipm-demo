
const EnrolledStudent = () => (
  <div className="flex justify-between items-center text-white/75 hover:text-white hover:bg-white/10 duration-200 px-1 py-0.5 rounded-sm cursor-default">
    <p>Martim Gonçalves</p>
    <p>70000</p>
  </div>
)

const DetailedViewCard = ({ shiftInfo }: { shiftInfo?: any }) => {
  return (
    <div className="card w-full flex-1 p-4 flex flex-col gap-4">
      <h1 className="header">Detailed View</h1>

      <div className="flex flex-col gap-3 justify-between">
        <div>
          <h3 className="text-xs font-medium text-white/75">Course</h3>
          <h1 className="text-2xl italic text-white">Interação Pessoa-Máquina</h1>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white/75">Shift</h3>
          <h1 className="text-2xl italic text-white">Prático 1</h1>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white/75">Location</h3>
          <h1 className="text-2xl italic text-white">Ed.II - Lab. 121</h1>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white/75">Date & Time</h3>
          <h1 className="text-2xl italic text-white">Monday 08:00 - 10:00</h1>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white/75">Professor</h3>
          <h1 className="text-2xl italic text-white">Teresa Romão</h1>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-1 text-white">
        <div className="bg-white/30 rounded font-medium py-1 px-2 flex justify-between">
          <h3>Name</h3>
          <h3>Number</h3>
        </div>
        <div className="relative flex-1 fscroll">
          <div className="absolute h-full w-full overflow-y-auto pr-1">
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
            <EnrolledStudent />
          </div>
        </div>
      </div>


    </div>
  )
}

export default DetailedViewCard