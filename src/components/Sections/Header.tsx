import {
  Dialog,
  Transition,
  TransitionChild,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3BottomRightIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { FC, Fragment, memo, useCallback, useMemo, useState } from "react";
import type React from "react";
import { useTranslation } from "react-i18next";

import { SectionId } from "../../data/data";
import { useNavObserver } from "../../hooks/useNavObserver";

export const headerID = "headerNav";

const Header: FC = memo(() => {
  const { t, i18n } = useTranslation();
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [
      SectionId.About,
      SectionId.Resume,
      SectionId.Portfolio,
      SectionId.Testimonials,
      SectionId.Contact,
    ],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    if (section) {
      setCurrentSection(section);
    }
  }, []);

  useNavObserver(
    navSections.map((section) => `#${section}`).join(","),
    intersectionHandler,
  );

  return (
    <>
      <MobileNav
        currentSection={currentSection}
        navSections={navSections}
        t={t}
        i18n={i18n}
      />
      <DesktopNav
        currentSection={currentSection}
        navSections={navSections}
        t={t}
        i18n={i18n}
      />
    </>
  );
});

const DesktopNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  t: ReturnType<typeof useTranslation>["t"];
  i18n: ReturnType<typeof useTranslation>["i18n"];
}> = memo(({ navSections, currentSection, t, i18n }) => {
  const baseClass =
    "-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100";
  const activeClass = classNames(baseClass, "text-orange-500");
  const inactiveClass = classNames(baseClass, "text-neutral-100");
  return (
    <header
      className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
      id={headerID}
    >
      <nav className="flex items-center justify-center gap-x-8">
        {navSections.map((section) => (
          <NavItem
            activeClass={activeClass}
            current={section === currentSection}
            inactiveClass={inactiveClass}
            key={section}
            section={section}
            t={t}
          />
        ))}
        <LanguageSwitcher i18n={i18n} t={t} />
      </nav>
    </header>
  );
});

DesktopNav.displayName = "DesktopNav";

const MobileNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  t: ReturnType<typeof useTranslation>["t"];
  i18n: ReturnType<typeof useTranslation>["i18n"];
}> = memo(({ navSections, currentSection, t, i18n }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const baseClass =
    "p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";
  const activeClass = classNames(
    baseClass,
    "bg-neutral-900 text-white font-bold",
  );
  const inactiveClass = classNames(baseClass, "text-neutral-200 font-medium");
  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
        onClick={toggleOpen}
      >
        <Bars3BottomRightIcon className="h-8 w-8 text-white" />
        <span className="sr-only">{t("ui.open_sidebar")}</span>
      </button>
      <Transition as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex sm:hidden"
          onClose={toggleOpen}
        >
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-stone-900 bg-opacity-75"
              aria-hidden="true"
            />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative w-4/5 bg-stone-800">
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map((section) => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === currentSection}
                    inactiveClass={inactiveClass}
                    key={section}
                    onClick={toggleOpen}
                    section={section}
                    t={t}
                  />
                ))}
                <div className="px-2 py-2">
                  <LanguageSwitcher i18n={i18n} t={t} />
                </div>
              </nav>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
});

MobileNav.displayName = "MobileNav";

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
  t: ReturnType<typeof useTranslation>["t"];
}> = memo(({ section, current, inactiveClass, activeClass, onClick, t }) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}
    >
      {t(`sections.${section.toLowerCase()}`)}
    </Link>
  );
});

NavItem.displayName = "NavItem";

Header.displayName = "Header";
export default Header;

const LanguageSwitcher: FC<{
  i18n: ReturnType<typeof useTranslation>["i18n"];
  t: ReturnType<typeof useTranslation>["t"];
}> = memo(({ i18n, t }) => {
  const languages = useMemo(
    () => [
      { code: "en", label: t("lang.en") },
      { code: "es", label: t("lang.es") },
    ],
    [t],
  );

  const current = useMemo(
    () => languages.find((l) => l.code === i18n.resolvedLanguage) ?? languages[0],
    [i18n.resolvedLanguage, languages],
  );

  const onSelect = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        aria-label={t("ui.language_selector", { defaultValue: "Language selector" })}
        className="inline-flex items-center gap-2 rounded-md bg-transparent px-2.5 py-1.5 text-sm font-medium text-neutral-100 focus:outline-none focus-visible:ring-2 "
      >
        <LanguageIcon className="h-5 w-5 text-neutral-200" aria-hidden="true" />
        <span className="uppercase tracking-wide">{current.code}</span>
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className="z-50 mt-2 w-40 origin-top-right rounded-md bg-neutral-900/50 p-1 text-sm text-neutral-100 shadow-lg ring-1 ring-black/5 backdrop-blur focus:outline-none"
        >
          {languages.map((lng) => (
            <MenuItem key={lng.code}>
              {({ focus }) => (
                <button
                  type="button"
                  className={classNames(
                    "flex w-full items-center justify-between gap-2 rounded px-3 py-2",
                    focus ? "bg-neutral-700/60 text-white" : "text-neutral-200",
                    lng.code === current.code ? "font-semibold" : "font-normal",
                  )}
                  onClick={() => onSelect(lng.code)}
                >
                  <span>{lng.label}</span>
                  <span className="text-xs uppercase text-neutral-400">{lng.code}</span>
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
});
LanguageSwitcher.displayName = "LanguageSwitcher";
