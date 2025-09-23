import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { contact, SectionId } from "../../../data/data";
import { ContactType, ContactValue } from "../../../data/dataDef";
import FacebookIcon from "../../Icon/FacebookIcon";
import GithubIcon from "../../Icon/GithubIcon";
import InstagramIcon from "../../Icon/InstagramIcon";
import LinkedInIcon from "../../Icon/LinkedInIcon";
import TwitterIcon from "../../Icon/TwitterIcon";
import Section from "../../Layout/Section";
import ContactForm from "./ContactForm";

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: "Email" },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: "Phone" },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: "Location" },
  [ContactType.Github]: { Icon: GithubIcon, srLabel: "Github" },
  [ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: "LinkedIn" },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: "Facebook" },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: "Twitter" },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: "Instagram" },
};

const Contact: FC = memo(() => {
  const { t } = useTranslation();
  const { items } = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex min-h-[60vh] flex-col gap-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            {t("contact.header")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1">
            <div className="rounded-xl">
              <ContactForm />
            </div>
          </div>
          <div className="order-1 col-span-1 flex flex-col gap-y-5 md:order-2">
            <p className="prose leading-7 text-neutral-300">
              {t("contact.description")}
            </p>
            <dl className="flex flex-col space-y-3 text-base text-neutral-300 sm:space-y-2">
              {items.map(({ type, text, href }) => {
                const { Icon, srLabel } = ContactValueMap[type];
                return (
                  <div key={srLabel}>
                    <dt className="sr-only">
                      {t(`contact.${srLabel.toLowerCase()}`, {
                        defaultValue: srLabel,
                      })}
                    </dt>
                    <dd className="group flex items-center">
                      <a
                        className={classNames(
                          "-m-2 flex items-center rounded-md p-2 text-neutral-300 transition-colors duration-200 hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                          { "hover:text-white": href },
                        )}
                        href={href}
                        target="_blank"
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        />
                        <span className="ml-3 text-sm sm:text-base">
                          {text}
                        </span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = "Contact";
export default Contact;
