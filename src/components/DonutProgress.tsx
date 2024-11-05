const DonutProgress = ({ className, thickness, progress }: { className?: string, thickness: number, progress: number }) => {
  // Define viewBox size (arbitrary base size that scales proportionally)
  const viewBoxSize = 100;
  
  // Calculate relative thickness (thickness should scale with size)
  const relativeThickness = (thickness / 125) * viewBoxSize; // 125 was original size
  
  // Calculate radius and circumference based on viewBox size
  const radius = (viewBoxSize - relativeThickness) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the stroke dash offset based on progress
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg 
      className={className} 
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      width="100%"
      height="100%"
    >
      {/* Background circle (outline only) */}
      <circle
        cx={viewBoxSize / 2}
        cy={viewBoxSize / 2}
        r={radius}
        stroke="#ffffff33"
        strokeWidth={relativeThickness}
        fill="transparent"
      />
      
      {/* Progress circle (filled part) */}
      <circle
        cx={viewBoxSize / 2}
        cy={viewBoxSize / 2}
        r={radius}
        stroke="white"
        strokeWidth={relativeThickness}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`}
      />
    </svg>
  );
};

export default DonutProgress;