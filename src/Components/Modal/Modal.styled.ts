import styled from 'styled-components';

export const ModalWrapper = styled.div``;
export const ModalModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 30%;
  transform: translate(-50%, -50%);
  z-index: 13;
  border-radius: 15px;
  background: #252525;
`;

export const ModalContent = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    border-radius: 5px;
    border: 1px solid #00e6cc;
  }
  .text-content {
    h3 {
      font-size: 1.6rem;
      text-align: center;
      padding-bottom: 0.5rem;
      font-weight: 800;
      border-bottom: 1px solid #00e6cc;
      background: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet,
        red
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400% 400%;
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

    h4 {
      font-size: 1.3rem;
      text-align: right;
      padding-bottom: 0.5rem;
      font-weight: 800;
      background: linear-gradient(to right, white, white, orange, yellow);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400% 400%;
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

    .share-item {
      margin-bottom: 1rem;
      font-size: 1.4rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      color: #00e6cc;
      &:hover {
        transform: scale(1.1) translateX(25px);
      }
      a {
        font-size: inherit;
        font-family: inherit;
        color: inherit;
        text-decoration: none;
        display: grid;
        grid-template-columns: 40px 1fr;
        align-items: center;
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 12;
`;
