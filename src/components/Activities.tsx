export default function Activities() {
  const pastEvents = [
    { title: "極短篇漫畫大賽", date: "05/27" },
    { title: "《超時空輝耀姬!》分鏡解析", date: "06/03" },
    { title: "秋季FF同人展參展", date: "07/22" },
    { title: "動畫分鏡工作坊", date: "09/15" },
  ];

  return (
    <section className="flex flex-col h-full">
      <div className="bg-cyan-400 border-8 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-[1deg] w-full flex-1">
        <h2 className="text-2xl lg:text-3xl font-black mb-4 font-sans">活動預告</h2>
        <ul className="text-lg md:text-xl font-bold space-y-3">
          {pastEvents.map((evt, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="shrink-0 font-sans font-black bg-black text-white px-2 py-1 rotate-[-2deg] mr-2 text-sm">{evt.date}</span>
              <span className="underline decoration-4 decoration-black underline-offset-4 line-clamp-1">{evt.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
