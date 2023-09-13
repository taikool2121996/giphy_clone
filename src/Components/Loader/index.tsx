// libs
import { FC } from 'react';
// styled-components
import { LoaderWrapper } from './Loader.styled';

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
