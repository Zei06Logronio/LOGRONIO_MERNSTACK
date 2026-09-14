function Studentcard({ name = "Zei", age = "20", studentId = "202403854", course = "BSIT", section = "3-3" }) {
  return (
    <div className="flex justify-center items-center min-h-[50vh] p-4">
      <div className="w-full max-w-sm bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 text-white transition-all hover:bg-black/50">
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-14 w-14 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-xl shadow-inner border border-white/20">
            {name ? name.charAt(0) : "Z"}
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-wide">{name}</h2>
            <span className="inline-block px-2.5 py-0.5 bg-white/20 text-white text-xs font-semibold rounded-full mt-1">
              {course} {section}
            </span>
          </div>
        </div>
        
        <div className="space-y-2 border-t border-white/10 pt-4 text-sm text-gray-300">
          <div className="flex justify-between">
            <span className="text-black">Student ID:</span>
            <span className="font-medium text-white">{studentId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Age:</span>
            <span className="font-medium text-white">{age}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentcard;
