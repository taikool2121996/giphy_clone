import styled from 'styled-components';

export const TrendingWrapper = styled.div`
  padding: 2rem;
  background-color: #181818;
  border-radius: 1rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    i {
      background: linear-gradient(to right, #00e6cc, #00cc66);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -20px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 15px;
  }
`;
