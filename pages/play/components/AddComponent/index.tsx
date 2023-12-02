import MainLogo from "components/common/startpage";
import React from "react";
import MonnodePNG from "public/assets/logo/monnode.png";
import WelcomePNG from "public/assets/logo/Welcome to.png";
import { Button } from "@nextui-org/react";
import styled from "styled-components";
import API from "../../../api/base-api";
import { useRouter } from "next/navigation";

function AddComponent() {
  const router = useRouter();
  const addNodeClickHandler = () => {};
  return (
    <Container>
      <div>
        <MainLogo />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <img src={WelcomePNG.src} />

        <img src={MonnodePNG.src} />
      </div>
      <Button
        className={"bg-white text-black font-bold"}
        radius="sm"
        onClick={addNodeClickHandler}
      >
        Add Node
      </Button>
    </Container>
  );
}

export default AddComponent;

const Container = styled.div`
  width: 88%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
