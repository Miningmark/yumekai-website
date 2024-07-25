import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import ThemeToggle from "@/components/menu/DarkLightMode";

// Import Icons
import IconArrowDown from "/public/assets/icons/arrow_drop_down.svg";
import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";

const StyledHeader = styled.header`
  position: relative;
  position: sticky;
  top: 0;
  z-index: 500;
  min-height: 120px;
  background-color: ${({ theme }) => theme.backgroundColor2};
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
    padding: 20px;
    display: block;
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

const DarkLightModeWrapper = styled.div`
  position: absolute;
  right: 30px;
`;

export default function PageHeader({ toggleTheme, theme }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <StyledHeader>
        <MenuLogoBackground>
          <YumeKaiLogo className="logo" />
        </MenuLogoBackground>

        <StyledMenu>
          <SubMenuWrapper>
            <MenuLink href="/" $active={pathname === "/" ? 1 : 0}>
              Startseite
            </MenuLink>
          </SubMenuWrapper>
          <SubMenuWrapper>
            <MenuLink href="/projects" $active={pathname === "/projects" ? 1 : 0}>
              Projekte
            </MenuLink>
            <IconArrowDown style={{ cursor: "pointer" }} />
            <SubMenu>
              <MenuLink href="/projects/yumekai" $active={pathname === "/projects/yumekai" ? 1 : 0}>
                YumeKai
              </MenuLink>
              <MenuLink
                href="/projects/yumekai-night"
                $active={pathname === "/projects/yumekai-night" ? 1 : 0}
              >
                YumeKai-Night
              </MenuLink>
            </SubMenu>
          </SubMenuWrapper>
          <SubMenuWrapper>
            <MenuLink href="/yumekai-2024" $active={pathname === "/yumekai-2024" ? 1 : 0}>
              Rückblick YumeKai
            </MenuLink>
          </SubMenuWrapper>
          <SubMenuWrapper>
            <MenuLink href="/das-sind-wir" $active={pathname === "/das-sind-wir" ? 1 : 0}>
              Das sind Wir
            </MenuLink>
          </SubMenuWrapper>
          <DarkLightModeWrapper>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </DarkLightModeWrapper>
        </StyledMenu>
      </StyledHeader>
    </>
  );
}
