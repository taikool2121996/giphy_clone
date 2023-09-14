import styled from 'styled-components';

export const GifItemWrapper = styled.div`
  .gif {
    position: relative;
    img {
      width: 100%;
      border-radius: 5px;
      cursor: pointer;
    }
    .love {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      i {
        font-size: 1.8rem;
        background: linear-gradient(to right, #fff35c, #00cc66);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        transform: scale(1.17);
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
