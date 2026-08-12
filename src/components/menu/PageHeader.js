import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import {
  SocialMediaContainer,
  SocialMediaContainerHeader,
} from "@/components/menu/SocialMediaContainer";
import ThemeToggle from "@/components/menu/DarkLightMode";

// Import Icons
import IconMenu from "/public/assets/icons/menu.svg";
import IconClose from "/public/assets/icons/close.svg";

import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";

const menuItems = [
  { name: "Startseite", path: "/" },

  {
    name: "Projekte",
    //path: "/projects",
    subItems: [
      { name: "Übersicht", path: "/projects" },
      { name: "YumeKai", path: "/projects/yumekai" },
      { name: "YumeKai-Night", path: "/projects/yumekai-night" },
    ],
  },

  {
    name: "Rückblicke",
    //path: "/review/yumekai-2024",
    subItems: [
      { name: "2024", path: "/review/yumekai-2024" },
      { name: "Night-II", path: "/review/yumekai-night-ii-2024" },
      { name: "2025", path: "/review/yumekai-2025" },
      { name: "2026", path: "/review/yumekai-2026" },
    ],
  },
  /*
  {name: "Programm", path: "/programm2026",
    subItems: [
    { name: "Allgemein", path: "/programm2026/allgemein" },
    { name: "Aussteller", path: "/programm2026/aussteller" },
    { name: "Cosplayball", path: "/programm2026/cosplayball" },
    { name: "Cosplayer", path: "/programm2026/cosplayer" },
    { name: "Ehrengäste", path: "/programm2026/ehrengaeste" },
    { name: "Essen", path: "/programm2026/essen" },
    { name: "Händler", path: "/programm2026/haendler" },
    { name: "Künstler", path: "/programm2026/kuenstler" },
    { name: "Wettbewerbe", path: "/programm2026/wettbewerbe" },
    { name: "Workshops", path: "/programm2026/workshops" },
  ],
  },
  */
  {name: "das sind wir", path: "/das-sind-wir"}
  /*
  { name: "Anmeldungen", path: "/registration" },
  { name: "Ticketshop", path: "/shop" },
   */
];

const StyledHeader = styled.header`
  position: sticky;
  top: ${({ $offset }) => `-${$offset}px`};
  z-index: 500;
`;

const MenuLogoBackground = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor2};
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  .logo {
    height: 120px;
    width: 300px;
    max-width: 45vw;
    padding: 20px;
  }

  @media (max-width: 800px) {
    box-shadow: var(--shadow-sm);
  }
`;

const StyledMenu = styled.nav`
  position: relative;
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  box-shadow: var(--shadow-sm);
  background-color: ${({ theme }) => theme.headerSurface};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  svg {
    fill: ${({ theme }) => theme.text};
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const CompactLeftGroup = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  display: flex;
  align-items: center;
  gap: 14px;
  transform: ${({ $visible }) => `translateY(-50%) translateX(${$visible ? "0" : "-12px"})`};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: transform var(--transition-base), opacity var(--transition-base);
`;

const CompactLogoLink = styled(Link)`
  display: flex;
  align-items: center;

  svg {
    height: 34px;
    width: auto;
  }
`;

const CompactSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: scale(0.78);
  transform-origin: left center;
`;

const navLinkStyles = `
  text-decoration: none;
  position: relative;
  padding: 8px 16px;
  margin: 0;
  font-weight: 700;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: color var(--transition-fast), background-color var(--transition-fast);

  &::after {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 4px;
    height: 2px;
    border-radius: var(--radius-pill);
    background: var(--secondary-color);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform var(--transition-base);
  }

  &:hover {
    color: var(--primary-color);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 1000px) {
    font-size: 1.05rem;
  }

  @media (max-width: 800px) {
    font-size: 1.05rem;
    text-align: center;
    justify-content: center;
    padding: 14px;
    border-radius: var(--radius-md);

    &::after {
      display: none;
    }
  }
`;

const MenuLink = styled(Link)`
  ${navLinkStyles}
  color: ${({ theme, $active }) => ($active == 1 ? theme.navActiveColor : theme.navInactiveColor)};

  &::after {
    transform: ${({ $active }) => ($active == 1 ? "scaleX(1)" : "scaleX(0)")};
  }

  @media (max-width: 800px) {
    background-color: ${({ theme, $active }) => ($active == 1 ? theme.surfaceMuted : "transparent")};

    &:hover {
      background-color: ${({ theme }) => theme.surfaceMuted};
    }
  }
`;

const MenuNoLink = styled.p`
  ${navLinkStyles}
  color: ${({ theme, $active }) => ($active == 1 ? theme.navActiveColor : theme.navInactiveColor)};

  @media (max-width: 800px) {
    background-color: ${({ theme, $active }) => ($active == 1 ? theme.surfaceMuted : "transparent")};

    &:hover {
      background-color: ${({ theme }) => theme.surfaceMuted};
    }
  }
`;

const SubMenuLink = styled(Link)`
  text-decoration: none;
  padding: 10px 14px;
  margin: 0;
  color: ${({ theme, $active }) => ($active == 1 ? theme.navActiveColor : theme.navInactiveColor)};
  font-weight: 600;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast), background-color var(--transition-fast);
  text-align: center;

  &:hover {
    color: var(--primary-color);
    background-color: ${({ theme }) => theme.surfaceMuted};
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    text-align: center;
    padding: 12px;
  }
`;

const HamburgerIcon = styled.div`
  position: fixed;
  right: 14px;
  top: 14px;
  z-index: 950;

  display: none;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 4px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.text};
    width: 26px;
    height: 26px;
    padding: 7px;
    border-radius: var(--radius-md);
    transition: background-color var(--transition-fast);
  }

  svg:hover {
    background-color: ${({ theme }) => theme.surfaceMuted};
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

const overlayFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const menuSlideIn = keyframes`
  from { opacity: 0; transform: translateY(-14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor2};
  box-shadow: var(--shadow-lg);
  z-index: 600;
  display: flex;
  flex-direction: column;
  font-size: large;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  padding: 20px 12px 16px 12px;
  animation: ${menuSlideIn} var(--transition-base);
  max-height: 100dvh;
  overflow-y: auto;

  @media (min-width: 801px) {
    display: none;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 30px;
  background: ${({ theme }) => theme.headerSurface};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: var(--shadow-lg);
  z-index: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 12px 0;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  animation: ${overlayFadeIn} var(--transition-fast);
`;

const SubMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.text};
    width: 30px;
    height: 30px;
  }
`;

const MobileSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 700;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  padding: 4px 0 12px 0;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.text};
    width: 30px;
    height: 30px;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const DarkLightModeWrapper = styled.div`
  position: absolute;
  right: 30px;
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  z-index: 590;
  animation: ${overlayFadeIn} var(--transition-fast);
`;

export default function PageHeader({ toggleTheme, theme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [isCompact, setIsCompact] = useState(false);
  const [logoHeight, setLogoHeight] = useState(160);
  const desktopMenuRef = useRef(null);
  const logoBarRef = useRef(null);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    function measureLogoBar() {
      if (logoBarRef.current) {
        setLogoHeight(logoBarRef.current.offsetHeight);
      }
    }

    measureLogoBar();
    window.addEventListener("resize", measureLogoBar);
    return () => window.removeEventListener("resize", measureLogoBar);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsCompact(window.scrollY > logoHeight - 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoHeight]);

  useEffect(() => {
    function handleOutsideInteraction(e) {
      // the mobile menu manages its own submenu open/close state via taps;
      // this listener is only for dismissing the desktop hover/click dropdown
      if (isMobileMenuOpen) return;
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(e.target)) {
        setOpenSubMenus({});
      }
    }
    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  function toggleMobileMenu() {
    setOpenSubMenus((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      return newState;
    });
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function toggleSubMenu(index) {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  function closeSubMenu(index) {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  }

  function openSubMenu(index) {
    setOpenSubMenus((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      newState[index] = true;
      return newState;
    });
  }

  return (
    <StyledHeader $offset={logoHeight}>
      <MenuLogoBackground ref={logoBarRef}>
        <Link href="/" aria-label="YumeKai Startseite">
          <YumeKaiLogo className="logo" />
        </Link>
        <SocialMediaContainerHeader />
      </MenuLogoBackground>

      <StyledMenu ref={desktopMenuRef}>
        <CompactLeftGroup $visible={isCompact}>
          <CompactLogoLink href="/" aria-label="YumeKai Startseite">
            <YumeKaiLogo />
          </CompactLogoLink>
          <CompactSocialWrapper>
            <SocialMediaContainer />
          </CompactSocialWrapper>
        </CompactLeftGroup>
        {menuItems.map((item, index) => (
          <SubMenuWrapper
            key={item.name}
            onMouseEnter={() => openSubMenu(index)}
            onMouseMove={() => openSubMenu(index)}
            onMouseLeave={() => closeSubMenu(index)}
          >
            {!item.subItems || item.path ? (
              <MenuLink
                href={item.path}
                $active={pathname === item.path ? 1 : 0}
                //onClick={toggleMobileMenu}
              >
                {item.name}
              </MenuLink>
            ) : (
              <MenuNoLink onClick={() => openSubMenu(index)}>{item.name}</MenuNoLink>
            )}
            {item.subItems && (
              <>
                {openSubMenus[index] && (
                  <SubMenu>
                    {item.subItems.map((subItem) => (
                      <SubMenuLink
                        key={subItem.path}
                        href={subItem.path}
                        $active={pathname === subItem.path ? 1 : 0}
                        onClick={() => closeSubMenu(index)}
                      >
                        {subItem.name}
                      </SubMenuLink>
                    ))}
                  </SubMenu>
                )}
              </>
            )}
          </SubMenuWrapper>
        ))}
        <DarkLightModeWrapper>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </DarkLightModeWrapper>
      </StyledMenu>

      <HamburgerIcon>
        {isMobileMenuOpen ? (
          <IconClose onClick={toggleMobileMenu} aria-label="Menü schließen" />
        ) : (
          <IconMenu onClick={toggleMobileMenu} aria-label="Menü öffnen" />
        )}
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </HamburgerIcon>

      {isMobileMenuOpen && (
        <MobileMenuOverlay onClick={toggleMobileMenu}>
          <MobileMenu onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item, index) => (
              <div key={`${item.name}mobile`}>
                <MenuItemWrapper>
                  {!item.subItems || item.path ? (
                    <MenuLink
                      href={item.path}
                      $active={pathname === item.path ? 1 : 0}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </MenuLink>
                  ) : (
                    <MenuNoLink onClick={() => toggleSubMenu(index)}>{item.name}</MenuNoLink>
                  )}
                </MenuItemWrapper>
                {item.subItems && (
                  <MobileSubMenu $isOpen={openSubMenus[index]}>
                    {item.subItems.map((subItem) => (
                      <SubMenuLink
                        key={`${subItem.name}mobile`}
                        href={subItem.path}
                        $active={pathname === subItem.path ? 1 : 0}
                        onClick={toggleMobileMenu}
                      >
                        {subItem.name}
                      </SubMenuLink>
                    ))}
                  </MobileSubMenu>
                )}
              </div>
            ))}
          </MobileMenu>
        </MobileMenuOverlay>
      )}
    </StyledHeader>
  );
}
