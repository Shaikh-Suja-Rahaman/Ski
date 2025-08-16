import { useTheme } from "../context/theme-provider";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark"
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src="/cloudy-day Dark.png"
            alt="Cloudy day logo"
            className="h-14"
            style={
              isDark ? { filter: "brightness(0) invert(1)" } : {}
            }
          />

        </Link>
          <div onClick={()=>setTheme(isDark?"light":"dark")}>
            toggle
          </div>
      </div>
    </header>
  );
};

export default Header;
