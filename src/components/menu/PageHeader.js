import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SocialMediaContainerHeader } from "@/components/menu/SocialMediaContainer";
import ThemeToggle from "@/components/menu/DarkLightMode";

// Import Icons
import IconMenu from "/public/assets/icons/menu.svg";
import IconArrowDown from "/public/assets/icons/arrow_drop_down.svg";

import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";

const menuItems = [
  { name: "Startseite", path: "/" },
  {
    name: "Projekte",
    path: "/projects",
    subItems: [
      { name: "YumeKai", path: "/projects/yumekai" },
      { name: "YumeKai-Night", path: "/projects/yumekai-night" },
    ],
  },
  { name: "Rückblick YumeKai", path: "/yumekai-2024" },
  { name: "Das sind Wir", path: "/das-sind-wir" },
];

const StyledHeader = styled.header`
  position: relative;
  position: sticky;
  top: -160px;
  z-index: 500;
`;

const MenuLogoBackground = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor2};
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;

  .logo {
    height: 120px;
    width: 300px;
    max-width: 45vw;
    padding: 20px;
  }

  @media (max-width: 800px) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const StyledMenu = styled.nav`
  position: relative;
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.backgroundColor2};

  svg {
    fill: ${({ theme }) => theme.text};
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  padding: 5px 15px;
  color: ${({ theme, $active }) => ($active == 1 ? theme.primaryColor : theme.secondaryColor)};
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    transform: translateY(-3px);
    transition: transform 0.3s ease;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const HamburgerIcon = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  width: 30px;

  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 10px;
  border-radius: 0 0 0 10px;

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.text};
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 55px;
  right: 0;
  width: 200px;
  background: ${({ theme }) => theme.backgroundColor2};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 600;
  display: flex;
  flex-direction: column;
  font-size: large;
  border-radius: 10px 0 0 10px;
  padding: 5px 0 5px 0;

  @media (min-width: 801px) {
    display: none;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  margin-top: 28px;
  background: ${({ theme }) => theme.backgroundColor2};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 700;
  display: flex;
  flex-direction: column;
  display: none;
  border-radius: 0 0 10px 10px;
`;

const SubMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor2};

  &:hover ${SubMenu} {
    display: flex;
  }
  a {
    padding-right: 5px;
  }

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
  background: ${({ theme }) => theme.backgroundColor2};
  z-index: 700;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  padding: 5px 0 5px 15px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.text};
    width: 30px;
    height: 30px;
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
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default function PageHeader({ toggleTheme, theme }) {
  const router = useRouter();
  const { pathname } = router;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState({});

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 800) {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  }

  function closeSubMenu(index) {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  }

  if (!windowWidth) {
    return null;
  }

  return (
    <StyledHeader>
      <MenuLogoBackground>
        <YumeKaiLogo className="logo" />
        <SocialMediaContainerHeader />
      </MenuLogoBackground>

      <StyledMenu>
        {windowWidth > 800 &&
          menuItems.map((item, index) => (
            <SubMenuWrapper
              key={item.path}
              onMouseEnter={() => openSubMenu(index)}
              onMouseMove={() => openSubMenu(index)}
            >
              <MenuLink href={item.path} $active={pathname === item.path ? 1 : 0}>
                {item.name}
              </MenuLink>
              {item.subItems && (
                <>
                  <IconArrowDown style={{ cursor: "pointer" }} />
                  {openSubMenus[index] && (
                    <SubMenu onMouseLeave={() => closeSubMenu(index)}>
                      <br />
                      {item.subItems.map((subItem) => (
                        <MenuLink
                          key={subItem.path}
                          href={subItem.path}
                          $active={pathname === subItem.path ? 1 : 0}
                          onClick={() => closeSubMenu(index)}
                        >
                          {subItem.name}
                        </MenuLink>
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
        <IconMenu onClick={toggleMobileMenu} />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </HamburgerIcon>

      {isMobileMenuOpen && (
        <MobileMenuOverlay onClick={toggleMobileMenu}>
          <MobileMenu onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item, index) => (
              <div key={`${item.path}mobile`}>
                <MenuItemWrapper>
                  <MenuLink
                    href={item.path}
                    $active={pathname === item.path ? 1 : 0}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </MenuLink>
                  {item.subItems && (
                    <IconArrowDown
                      style={{ marginLeft: "5px", cursor: "pointer" }}
                      onClick={() => toggleSubMenu(index)}
                    />
                  )}
                </MenuItemWrapper>
                {item.subItems && (
                  <MobileSubMenu $isOpen={openSubMenus[index]}>
                    {item.subItems.map((subItem) => (
                      <MenuLink
                        key={`${subItem.path}mobile`}
                        href={subItem.path}
                        $active={pathname === subItem.path ? 1 : 0}
                        onClick={toggleMobileMenu}
                      >
                        {subItem.name}
                      </MenuLink>
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
