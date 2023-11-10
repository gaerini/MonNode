import styled, { css } from "styled-components";

export const Container = styled.aside`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
top: 0;
width: 100%;
z-index: 110;
height: 10rem;
min-height: 44px;
border: 2px solid transparent;
background-image: linear-gradient(#000, #000),
linear-gradient(90deg, #0bd4b4, #01cfea);
background-origin: border-box;
background-clip: content-box, border-box;
box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
background: #000;

nav {
display: flex;
align-items: center;
justify-content: space-around;
padding: 2rem 4.7rem;
width: 100%;
height: 100%;
margin: 2rem auto;
}
`;

export const ContainerWhiteSpace = styled.div`
position: absolute;   bottom: 0;   height: 5.6rem;   min-height: 44px;
`

export const iconWrapper = styled.div`
margin-right: 1rem;
`

export const NavItem = styled.div<{ $isActive: boolean }>`
position: relative;

display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
width: 10rem;
height: 8rem;
border-radius: 50%;
cursor: pointer;


`;

export const BeforeIcon = styled.div`
  left: 5rem; 
  top: 5.9rem;
  position: absolute;
  cursor: pointer;
`;