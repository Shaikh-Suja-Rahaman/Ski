import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme-provider";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { CitySearch  } from "./city-search";

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark"
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/75">
     <div className="container mx-auto grid h-16 grid-cols-3 items-center px-4">

  {/* LEFT: LOGO */}
  <Link to="/" className="flex items-center gap-2 justify-self-start">
    <h1 className="font-famil text-[40px] leading-none font-thin translate-y-[1px]">
      SKII
    </h1>
    <img
      src="/cloudy-day Dark.png"
      alt="Cloudy day logo"
      className="h-10 w-auto"
      style={isDark ? { filter: "brightness(0) invert(1)" } : {}}
    />
  </Link>

  {/* CENTER: SEARCH */}
  <div className="flex justify-center justify-self-center">
    <CitySearch />
  </div>

  {/* RIGHT: THEME TOGGLE */}
  <div
    onClick={() => setTheme(isDark ? "light" : "dark")}
    className={`flex items-center cursor-pointer transition-transform duration-500 justify-self-end ${
      isDark ? "rotate-180" : "rotate-0"
    }`}
  >
    {isDark ? (
      <Sun className="h-6 text-yellow-500" />
    ) : (
      <Moon className="h-6 text-blue-500" />
    )}
  </div>

</div>

    </header>
  );
};

export default Header;
