import logo from "./assets/logo-nlw-expert.svg";

function App() {
  return (
    <>
      <div className="mx-auto max-w-6xl my-12 space-y-6">
        <img src={logo} alt="logo nlw expert" />

        <form className="w-full">
          <input 
            type="text" 
            placeholder="Busque em suas notas..."
            className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          />
        </form>

        <div className="h-px bg-slate-700" />

        <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
          <div className="rounded-md bg-slate-700 p-5 space-y-3">
            <span className="text-sm font-medium text-slate-200">
              Adicionar nota
            </span>
            <p className="text-sm leading-6 text-slate-400">
              Grave uma nota em áudio que será convertida para texto
              automaticamente.
            </p>
          </div>

          <div className="rounded-md bg-slate-800 space-y-3 p-5 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-300">
              há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus laboriosam unde rerum atque explicabo, veritatis cupiditate vitae. Aliquid ea voluptatem itaque a dolorum temporibus in aliquam autem optio molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum sunt sint nulla blanditiis illo maiores illum ipsa doloribus corrupti, tempora nostrum ipsum commodi omnis, voluptatem libero facilis consequatur iusto?
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
          </div>

          <div className="rounded-md bg-slate-800 space-y-3 p-5 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-300">
              há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus laboriosam unde rerum atque explicabo, veritatis cupiditate vitae. Aliquid ea voluptatem itaque a dolorum temporibus in aliquam autem optio molestiae.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
          </div>

          <div className="rounded-md bg-slate-800 space-y-3 p-5 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-300">
              há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus laboriosam unde rerum atque explicabo, veritatis cupiditate vitae. Aliquid ea voluptatem itaque a dolorum temporibus in aliquam autem optio molestiae.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
          </div>

          

        </div>
      </div>
    </>
  );
}

export default App;
