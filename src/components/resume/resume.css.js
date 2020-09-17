import styled from 'styled-components';

export const Container = styled.div`
  height: min-content;
  transition: 0.2s ease-in-out;
  padding: 14rem 8rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  .grid {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .header {
    font-size: 2rem;
    font-weight: 500;
  }

  .description {
    max-width: 80rem;
    margin: 1rem 0;
    line-height: 1.5;
  }

  li {
    background: rgba(255, 218, 185, 0.85);
    padding: 10px;
    border-radius: 4px;
    width: max-content;
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.06);
      font-weight: 600;
      background: rgba(255, 218, 185, 0.55);

      img {
        transform: scale(1.15);
        filter: contrast(0.9);
      }
    }
  }

  .span-2 {
    grid-column: span 2 / auto;
    grid-gap: 2rem;
  }

  img {
    padding-left: 1rem;
    display: flex;
    filter: contrast(0.4);
    transition: 0.2s ease-in-out;
  }
`;
