import ArrowUpRight from "@/../public/icon/arrow-up-right.svg";

export type PartnerProfileProps = {
  photo: string;
  name: string;
  position: string;
  describtion: string;
  linkUrl: string;
  linkText: string;
}

export default function PartnerProfile({ photo, name, position, describtion, linkUrl, linkText }: PartnerProfileProps) {
  return (
    <div className="flex flex-col gap-8 p-8 bg-[var(--bg-white)] text-[var(--fg-dark)]">
      <div className="flex flex-row gap-6">
        <img src={photo} alt={name} className="h-17 rounded-4xl" />
        <div className="flex flex-col">
          <div className="font-[1.5rem]">
            {name}
          </div>
          <div className="font-silka-400">
            {position}
          </div>
        </div>
      </div>
      <div className="font-silka-400 font-[0.875rem]">
        {describtion}
      </div>
      <a href={linkUrl} className="flex gap-3 items-center hover:underline cursor-pointer text-blue-600 visited:text-purple-600">
        <div className="text-base">
          {linkText}
        </div>
        <ArrowUpRight alt="CustomDev" className="h-6" />
      </a>
    </div>
  )
}
