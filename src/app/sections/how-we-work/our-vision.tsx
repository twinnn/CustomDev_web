export default function OurVision() {
  return (
    <div className="w-full bg-[var(--bg-light)] flex flex-col md:flex-row \
      px-5 py-24 md:px-12 md:py-30 gap-16">
      <div className="flex flex-col justify-between flex-1/2 gap-16">
        <div className="flex flex-col gap-6 md:gap-3">
          <div className="font-silka-400 w-fit text-[0.8125rem] border-b-1 border-[#35add9] py-2 px-4">
            Naša vízia
          </div>
          <div className="text-[2.5rem] md:text-[3rem]">
            „Našou víziou je pretaviť moderné technológie do riešení, ktoré reálne pomáhajú firmám rásť.“
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="border-1 border-[var(--fg-white)] p-4">
            15+ rokov praxe vo vývoji enterprise softvéru
          </div>
          <div className="border-1 border-[var(--fg-white)] p-4">
            Skúsenosti s Fortune 500 firmami a startupmi
          </div>
          <div className="border-1 border-[var(--fg-white)] p-4">
            Azure, Kubernetes a AI/ML integrácie v praxi
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1/2 gap-10 md:gap-16">
        <div>
          <img src="pp.jpg" alt="Chat" className="w-75" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="text-[2rem]">
              Peter Pojtek
            </div>
            <div className="text-[1.5rem]">
              CEO & Solution Architect, CustomDev
            </div>
          </div>
          <div className="font-silka-400">
            Skúsený .NET vývojár a architekt riešení s viac ako 15 rokmi praxe v oblasti enterprise softvéru, cloudu a AI. Viedol medzinárodné tímy, pracoval pre Fortune 500 spoločnosti a dnes stojí na čele CustomDev, kde pomáha firmám rásť prostredníctvom moderných technológií.
          </div>
        </div>
      </div>
    </div>
  );
}
