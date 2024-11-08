export default function Skills(){
  const logos: string[] = ['html-5', 'css', 'js', 'bootstrap', 'tailwindcss', 'react', 'nextjs', 'node', 'typescript', 'express', 'mongo', 'python', 'php', 'laravel', 'mysql', 'figma', 'postman']
  return(
    <>
      <div className="section section-2 pt-10 pb-8">
        <h1 className="font-bold text-3xl">💻Tech & Tools</h1>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
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

