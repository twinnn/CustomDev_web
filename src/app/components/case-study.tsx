export type CaseStudyProps = {
  note: string;
  name: string;
  imagesrc: string;
  text: string;
  features: string[];
}

export default function CaseStudy(props: CaseStudyProps) {
  return (
    <div className="flex flex-col w-full justify-between md:flex-2/3 p-6 md:p-8 gap-16 bg-[var(--bg-white)] text-[var(--fg-dark)]">
      <div className="flex flex-col md:flex-row content-between">
        <div className="flex flex-1 flex-col gap-6 md:gap-3">
          <div className="font-silka-400 w-fit text-[0.8125rem] border-b-1 border-[#35add9] py-2 px-4">
            {props.note}
          </div>
          <div className="text-[2rem] md:text-[2.5rem]">
            {props.name}
          </div>
        </div>
        <div>

        <img src={props.imagesrc} alt="Vona Dreva" className="h-30" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
          <div className="font-silka-400">
              {props.text}
          </div>
          <div className="flex flex-col md:flex-row gap-3">
              {
                props.features.map((val, index) =>
                  <button key={index} className="border-1 border-[var(--fg-dark)] p-4 w-fit">
                    {val}
                  </button>
                )
              }
          </div>
      </div>
    </div>
  );
}