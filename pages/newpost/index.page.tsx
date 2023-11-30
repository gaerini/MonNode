import AddFile from "components/common/AddFile";
import React, { useState } from "react";
import HeaderNav from "components/common/HeaderNav";
import BlackBackground from "components/common/BlackBackground";
import BottomNav from "components/common/BottomNav";
import MynodeComponent from "../play/components/MynodeComponent";
import HotComponent from "../play/components/HotComponent";
import RecentComponent from "../play/components/RecentComponent";
import * as S from "./style";

type Tab = "mynode" | "trend" | "hot" | "recent";

const Play: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("mynode");

  const renderContent = () => {
    switch (selectedTab) {
      case "mynode":
        return <MynodeComponent />;
      case "hot":
        return <HotComponent />;
      case "recent":
        return <RecentComponent />;
      default:
        return null;
    }
  };

  return (
    <BlackBackground>
      <S.ContentWrapper>
        <HeaderNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <AddFile />
      </S.ContentWrapper>
      <BottomNav />
    </BlackBackground>
  );
};

export default Play;
