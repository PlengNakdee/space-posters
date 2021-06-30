import { Popover, Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { useTranslation } from "next-i18next";

function Header() {
  const { t } = useTranslation("header");
  return (
    <header className="flex justify-between bg-black text-white">
      <div className="ml-4 mt-4 pb-4 sm:ml-10 lg:ml-20">
        <a href="/" className="text-3xl sm:text-6xl">
          space posters
        </a>
      </div>
      <div>{}</div>
      <div className="flex">
        <div className="relative md:hidden mr-4 mt-4">
          <Popover>
            <Popover.Button>
              <MenuIcon className="text-white h-8" />
            </Popover.Button>

            <Popover.Panel className="z-10">
              <div className="grid">
                <a href="/" className="">
                  {t("home")}
                </a>
                <a href="/posters" className="">
                  {t("posters")}
                </a>
                <a href="/contact" className="">
                  {t("contact")}
                </a>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
        <div
          className="hidden justify-items-center md:flex space-x-2 mr-4 mt-6 sm:mr-10 lg:mr-20 
        sm:space-x-4 lg:space-x-6 sm:text-2xl"
        >
          <a href="/" className="">
            {t("home")}
          </a>
          <a href="/posters" className="">
            {t("posters")}
          </a>
          <a href="/contact" className="">
            {t("contact")}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
