import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { education, experience, SectionId, skills } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import { SkillGroup } from "./Skills";
import TimelineItem from "./TimelineItem";

const Resume: FC = memo(() => {
  const { t } = useTranslation();
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
            const contentStr = t(`education.items.${index}.content`, {
              defaultValue: "",
            });
            const content = contentStr
              ? (
                <>
                  {contentStr
                    .split(/\n{2,}/)
                    .map((para, i) => (
                      <p
                        key={i}
                        className="pb-4 last:pb-0 whitespace-pre-line"
                      >
                        {para}
                      </p>
                    ))}
                </>
              )
              : item.content;
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
            const contentStr = t(`experience.items.${index}.content`, {
              defaultValue: "",
            });
            const content = contentStr
              ? (
                <>
                  {contentStr
                    .split(/\n{2,}/)
                    .map((para, i) => (
                      <p
                        key={i}
                        className="pb-4 last:pb-0 whitespace-pre-line"
                      >
                        {para}
                      </p>
                    ))}
                </>
              )
              : item.content;
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
