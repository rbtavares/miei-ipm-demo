const DonutProgress = ({ className, thickness, progress }: { className?: string, thickness: number, progress: number }) => {
  // Define basic properties of the SVG
  const size = 125; // Width and height of the SVG
  const radius = (size - thickness) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  
  // Calculate the stroke dash offset based on progress
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className={className} width={size} height={size}>
      {/* Background circle (outline only) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#ffffff33" // Outline color for the empty part
        strokeWidth={thickness}
        fill="transparent"
      />
      
      {/* Progress circle (filled part) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="white" // Filled color for progress
        strokeWidth={thickness}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotates the circle to start at the top
      />
    </svg>
  );
};

export default DonutProgress;