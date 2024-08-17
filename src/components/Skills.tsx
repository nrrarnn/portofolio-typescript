export default function Skills(){
  const logos: string[] = ['html-5', 'css', 'js', 'bootstrap', 'tailwindcss', 'react', 'node', 'typescript', 'python', 'php', 'laravel', 'mysql', 'figma', 'postman']
  return(
    <>
      <div className="section section-2 pb-8">
        <h1 className="font-bold text-3xl">Skills</h1>
        <div className="flex flex-wrap gap-4 ">
          {
            logos.map((el,index) => (
              <div key={index} className="p-5 bg-slate-800 backdrop-blur-sm rounded-[10px] hover:border hover:border-slate-500">
                <img src={`./img/${el}.png`} alt={`${el}`} className="w-[50px] h-[50px]"/>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

