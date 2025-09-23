import Image from "next/image";
import { FC, memo, useMemo } from "react";

import { TimelineItemProps } from "../../../data/dataDef";

const TimelineItem: FC<{ item: TimelineItemProps }> = memo(({ item }) => {
  const { title, date, location, content, logoSrc, link } = item;
  const resolvedLogo = useMemo(() => {
    if (!logoSrc) return undefined;
    return typeof logoSrc === "string" ? logoSrc : logoSrc.src;
  }, [logoSrc]);
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex items-center justify-center gap-3 md:justify-start">
          {resolvedLogo &&
            (link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-sm ring-1 ring-neutral-300 bg-white"
                aria-label={`${title} website`}
              >
                <Image
                  src={resolvedLogo}
                  alt={`${title} logo`}
                  fill
                  className="object-contain p-0.5"
                  sizes="44px"
                  priority={false}
                />
              </a>
            ) : (
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-sm ring-1 ring-neutral-300 bg-white">
                <Image
                  src={resolvedLogo}
                  alt={`${title} logo`}
                  fill
                  className="object-contain p-0.5"
                  sizes="44px"
                  priority={false}
                />
              </div>
            ))}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold hover:underline decoration-neutral-400"
            >
              {title}
            </a>
          ) : (
            <h2 className="text-xl font-bold">{title}</h2>
          )}
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">
            {location}
          </span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {/* Typography wrapper to ensure paragraphs and line-height render with proper spacing */}
      <div className="prose prose-stone max-w-none">{content}</div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";
export default TimelineItem;
