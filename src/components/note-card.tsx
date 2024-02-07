export function NoteCard(){
  return(
    <div className="rounded-md bg-slate-800 space-y-3 p-5 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-300">
              há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus laboriosam unde rerum atque explicabo, veritatis cupiditate vitae. Aliquid ea voluptatem itaque a dolorum temporibus in aliquam autem optio molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum sunt sint nulla blanditiis illo maiores illum ipsa doloribus corrupti, tempora nostrum ipsum commodi omnis, voluptatem libero facilis consequatur iusto?
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
          </div>
  )
}