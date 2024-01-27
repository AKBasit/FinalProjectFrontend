import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import evoke from "../../../public//Evoke.png";

const Header = () => {
  return (
    <section>
      <GlassNavigation />
    </section>
  );
};

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-7xl overflow-hidden border-[1px] border-gray/10 bg-gradient-to-br from-gray/20 to-gray/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
    >
      <FiArrowUpRight className="text-gray" />
    </motion.span>
  );
};

const Logo = () => (
  <img
    className="pointer-events-none relative left-0 top-[50%] z-10 text-4xl font-gray text-gray mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]"
    src={evoke}
  ></img>
);

const Links = () => (
  <div className="hidden items-center gap-10 md:flex">
    <GlassLink text="Home" />
    <button className="group relative font-semibold text-xl scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <a
        href="/collectiveWebDesignLibrary"
        className="relative z-10 text-gray/90 transition-colors group-hover:text-gray"
      >
        {/* change a ref to WD */}
        Web-Design Library
      </a>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-gray/20 to-gray/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
    {/* <GlassLink text="History" /> */}
    {/* <GlassLink text="Contact" /> */}
  </div>
);

const GlassLink = ({ text }) => {
  return (
    <a
      href="/"
      className="mx-auto group relative text-xl font-semibold scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-gray/90 transition-colors group-hover:text-gray">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-gray/20 to-gray/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

const TextLink = ({ text }) => {
  return (
    <>
      <a href="/" className="text-gray/90 transition-colors hover:text-gray">
        {text}
      </a>
    </>
  );
};

const Buttons = ({ setMenuOpen }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="md:block">
        <DashboardButton />
      </div>{" "}
      <button
        onClick={() => setMenuOpen((pv) => !pv)}
        className="ml-2 block scale-100 text-3xl text-gray/90 transition-all hover:scale-105 hover:text-gray active:scale-95 md:hidden"
      >
        <FiMenu />
      </button>
    </div>
  );
};

const SignUpButton = () => {
  return (
    <a
      href="/"
      className="group relative font-semibold text-xl scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-gray/90 transition-colors group-hover:text-gray">
        Home
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-gray/20 to-gray/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};
const DashboardButton = () => {
  return (
    <>
      <button className="group relative font-semibold text-xl scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <a
          href="/collectiveWebDesignLibrary"
          className="relative z-10 text-gray/90 transition-colors group-hover:text-gray"
        >
          {/* change a ref to WD */}
          Web-Design Library
        </a>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-gray/20 to-gray/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>

      <button className="group relative font-semibold text-xl scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <a
          href="/collectiveImageLibrary"
          className="relative z-10 text-gray/90 transition-colors group-hover:text-gray"
        >
          {/* change a ref to Image */}
          Image Library
        </a>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-gray/20 to-gray/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>

      <button className="group relative font-semibold text-xl scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <a
          href="/collectiveFontLibrary"
          className="relative z-10 text-gray/90 transition-colors group-hover:text-gray"
        >
          {/* change a ref to Font */}
          Font Library
        </a>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-gray/20 to-gray/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>
    </>
  );
};

const MobileMenu = ({ menuOpen }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? "fit-content" : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Sign up" />
          <TextLink text="Log in" />
        </div>
        <SignUpButton />
      </div>
    </motion.div>
  );
};

export default Header;
