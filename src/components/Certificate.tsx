const Certificate = () => {
  const numbers: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <>
      <div className="section section-2 py-20">
        <h1 className="font-bold text-white text-3xl">📜Certificate</h1>
        <div className="justify-center items-center flex flex-wrap gap-3">
        {numbers.map((number: number) => (
          <img key={number} src={`./img/s${number}.jpg`} alt={`${number}`} className="w-[260px] h-[180px] object-fill rounded-lg hover:border hover:border-slate-300 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:shadow-slate-600" /> 
        ))}
        </div>
      </div>
    </>
  )
}

export default Certificate