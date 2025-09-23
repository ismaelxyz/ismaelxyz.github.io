import classNames from "classnames";
import { FC, memo } from "react";
import { useTranslation, Trans } from "react-i18next";

import { aboutData, SectionId } from "../../data/data";
import Section from "../Layout/Section";

const About: FC = memo(() => {
  const { t } = useTranslation();
  const { profileImageSrc, aboutItems } = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div
        className={classNames("grid grid-cols-1 gap-y-4", {
          "md:grid-cols-4": !!profileImageSrc,
        })}
      >
        <div
          className={classNames("col-span-1 flex flex-col gap-y-6", {
            "md:col-span-3": !!profileImageSrc,
          })}
        >
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">
              {t("sections.about_title")}
            </h2>
            <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              <p>
                <Trans i18nKey="about.p1">
                  Greetings! My name is Ismael Belisario. I am a{" "}
                  <strong className="text-stone-100">Software Developer</strong>{" "}
                  from the Bolivarian Republic of Venezuela, a country rich in
                  culture and diversity.
                </Trans>
              </p>
              <p>{t("about.p2")}</p>
              <p>
                <Trans i18nKey="about.p3">
                  Over time, my arsenal of skills has grown exponentially. I
                  have embraced technological evolution, adapting and expanding
                  my knowledge in areas such as{" "}
                  <strong className="text-stone-100">
                    test-driven development (TDD), data structures, frameworks,
                    the intricate worlds of interpreters and compilers
                  </strong>
                  .
                </Trans>
              </p>
              <p>
                <Trans i18nKey="about.p4">
                  Today, I pride myself on having a solid technical background
                  and a burning passion for my profession. I have had the
                  privilege of developing{" "}
                  <strong className="text-stone-100">websites</strong> and{" "}
                  <strong className="text-stone-100">
                    mobile applications
                  </strong>
                  , as well as implementing process automation (
                  <strong className="text-stone-100">RPA</strong>).
                </Trans>
              </p>
              <p>{t("about.p5")}</p>
              <p>{t("about.p6")}</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">
                  {t(`about.${label}`)}:
                </span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = "About";
export default About;
