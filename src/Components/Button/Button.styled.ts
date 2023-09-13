import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s ease-in-out;
  span:first-child {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 2rem;
    border-radius: 1rem;
    gap: 1rem;
    background: #252525;
  }
  span:last-child {
    position: absolute;
    top: 50%;
    left: -0.3rem;
    transform: translateY(-50%);
    width: calc(100% + 0.6rem);
    height: calc(100% + 0.6rem);
    background: linear-gradient(to right, #9933ff, #00ff99);
    background-size: 400% 200%;
    border-radius: 1rem;
    z-index: 1;
    animation: gradient 5s ease-in-out infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  &:hover span:first-child {
    transition: all 0.3s ease-in-out;
    color: #00ff99;
  }
  &:hover span:last-child {
    animation-play-state: paused;
  }
`;
