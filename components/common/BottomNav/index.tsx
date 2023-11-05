import Link from "next/link";
import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { lightTheme } from "styles/PMDS";
import { URL_PATTERNS } from "constants/url-patterns";

const BottomNav: React.FC = () => {
  const { pathname } = useRouter();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  const navList = [
    {
      icon: ({ color }: { color: string }) => (
        <img
          src={activeRoute === URL_PATTERNS.HOME ? "/HomeActiveIcon.svg" : "/HomeIcon.svg"}
          style={{ fill: color }}
        />
      ),
      route: URL_PATTERNS.HOME,
    },
    {
      icon: ({ color }: { color: string }) => (
        <img
          src={activeRoute === URL_PATTERNS.Play ? "/PlayActiveIcon.svg" : "/PlayIcon.svg"}
          style={{ fill: color }}
        />
      ),
      route: URL_PATTERNS.Play,
    },
    {
      icon: ({ color }: { color: string }) => (
        <img
          src={activeRoute === URL_PATTERNS.Search ? "/SearchActiveIcon.svg" : "/SearchIcon.svg"}
          style={{ fill: color }}
        />
      ),
      route: URL_PATTERNS.Search,
    },
    {
      icon: ({ color }: { color: string }) => (
        <img
          src={activeRoute === URL_PATTERNS.Profile ? "/ProfileActiveIcon.svg" : "/ProfileIcon.svg"}
          style={{ fill: color }}
        />
      ),
      route: URL_PATTERNS.Profile,
    },
  ];

  return (
    <>
      <S.Container>
        <nav>
          {navList.map(({ icon, route }) => {
            const color = route === activeRoute
              ? (lightTheme.colors.main as string)
              : (lightTheme.colors.disabled as string);
            return (
              <S.iconWrapper key={route}>
                <Link passHref href={route}>
                  <S.NavItemAnchor $isActive={route === activeRoute}>
                    {icon({ color })}
                  </S.NavItemAnchor>
                </Link>
              </S.iconWrapper>
            );
          })}
        </nav>
      </S.Container>
      <S.ContainerWhiteSpace aria-hidden />
    </>
  );
};

export default React.memo(BottomNav);