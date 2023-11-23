import { Button } from "@nextui-org/react";
import { musicGanre } from "constants/ganre";
import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import { FadeInFromHidden } from "styles/animations";
const spring = {
  type: "spring",
  stiffness: 200,
  damping: 40,
};
function Ganre({ setPage, selectedGanre, setSelectedGanre }: any) {
  return (
    <>
      <GridContainer layout transition={spring}>
        {musicGanre.map((ganre) => (
          <Button
            key={ganre.key}
            size="lg"
            className="font-bold"
            color={ganre.key === selectedGanre ? "primary" : "default"}
            onClick={() => setSelectedGanre(ganre.key)}
          >
            {ganre.value}
          </Button>
        ))}
      </GridContainer>
      {selectedGanre && (
        <Button
          fullWidth
          className="font-bold"
          size="lg"
          variant={"flat"}
          color={"secondary"}
          onClick={() => setPage(2)}
        >
          다음
        </Button>
      )}
    </>
  );
}

export default Ganre;
const GridContainer = styled(motion.div)`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  opacity: 0;
  animation: ${FadeInFromHidden} 0.4s 0.4s forwards;
`;
