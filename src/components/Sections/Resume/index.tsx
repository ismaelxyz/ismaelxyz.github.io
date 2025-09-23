import { FC, ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";

import { education, experience, SectionId, skills } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import { SkillGroup } from "./Skills";
import TimelineItem from "./TimelineItem";

const Resume: FC = memo(() => {
  const { t } = useTranslation();

  // Render content coming from i18n either as an array of paragraphs or newline-separated string
  const renderTranslatedContent = (
    baseKey: string,
    fallback: ReactNode,
  ): ReactNode => {
    // Try array-of-paragraphs first (requires content to be an array in the locale file)
    const obj = t(baseKey, { returnObjects: true }) as unknown;
    if (Array.isArray(obj) && obj.every((s) => typeof s === "string")) {
      return (
        <>
          {(obj as string[]).map((para, i) => (
            <p key={i} className="pb-4 last:pb-0 whitespace-pre-line">
              {para}
            </p>
          ))}
        </>
      );
    }

    // Fallback to string with paragraphs separated by blank lines
    const contentStr = t(baseKey, { defaultValue: "" });
    if (typeof contentStr === "string" && contentStr.trim().length) {
      // Split on 2+ newlines. JSON \n\n will be parsed into actual newlines by i18next.
      const parts = contentStr.split(/\n{2,}/);
      return (
        <>
          {parts.map((para, i) => (
            <p key={i} className="pb-4 last:pb-0 whitespace-pre-line">
              {para}
            </p>
          ))}
        </>
      );
    }

    // If no translation provided, use the JSX fallback from data.tsx
    return fallback;
  };
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={t("sections.resume_education")}>
          {education.map((item, index) => {
            const title = t(`education.items.${index}.title`, {
              defaultValue: item.title,
            });
            const location = t(`education.items.${index}.location`, {
              defaultValue: item.location,
            });
            const date = t(`education.items.${index}.date`, {
              defaultValue: item.date,
            });
            const content = renderTranslatedContent(
              `education.items.${index}.content`,
              item.content,
            );
            const translated = { ...item, title, location, date, content };
            return (
              <TimelineItem item={translated} key={`${item.title}-${index}`} />
            );
          })}
        </ResumeSection>
        <ResumeSection title={t("sections.resume_work")}>
          {experience.map((item, index) => {
            const title = t(`experience.items.${index}.title`, {
              defaultValue: item.title,
            });
            const location = t(`experience.items.${index}.location`, {
              defaultValue: item.location,
            });
            const date = t(`experience.items.${index}.date`, {
              defaultValue: item.date,
            });
            const content = renderTranslatedContent(
              `experience.items.${index}.content`,
              item.content,
            );
            const translated = { ...item, title, location, date, content };
            return (
              <TimelineItem item={translated} key={`${item.title}-${index}`} />
            );
          })}
        </ResumeSection>
        <ResumeSection title={t("sections.resume_skills")}>
          <p className="pb-8">{t("resume.skills_intro")}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup
                key={`${skillgroup.name}-${index}`}
                skillGroup={skillgroup}
              />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = "Resume";
export default Resume;
