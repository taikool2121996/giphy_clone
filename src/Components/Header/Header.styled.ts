import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 2rem 22rem;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 1300px) {
    padding: 2rem 10rem;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    span {
      text-transform: uppercase;
      color: #a6a6a6;
      font-size: 0.8rem;
    }
    svg {
      width: 10rem;
    }
  }

  form {
    width: 100%;
    .input-control {
      position: relative;
      width: 100%;
      input {
        position: relative;
        z-index: 10;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        padding: 1rem 2rem;
        outline: none;
        border: none;
        border-radius: 15px;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -0.3rem;
        transform: translateY(-50%);
        width: 101%;
        height: 110%;
        background: linear-gradient(
          45deg,
          rgb(153, 51, 255) 0%,
          rgb(255, 102, 102) 100%
        );
        background-size: 400% 400%;
        z-index: 1;
        padding: 0.3rem;
        transform: scale(0);
        border-radius: 1rem;
        transition: all 0.3s ease;
        animation: gradient 7s ease-in-out infinite;
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
      &:hover::after,
      &:focus-within::after {
        transform: scale(1) translateY(-50%);
      }

      .submit-btn {
        position: absolute;
        top: 50%;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        border: none;
        outline: none;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        z-index: 10;
        height: 100%;
        padding: 0 1rem;
        border-radius: 15px;
        background: linear-gradient(to right, #9933ff, #ff6666);
        background-size: 400% 400%;
        animation: gradient 3s ease-in-out infinite;
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

        i {
          font-size: 1.8rem;
          color: white;
        }
      }
    }
  }
`;
