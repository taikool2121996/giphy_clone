// libs
import { FC } from 'react';
import { useSelector } from 'react-redux';
// styled-components
import { RandomWrapper } from './Random.styled';
// components
import Loader from '@/components/Loader';
import GifItem from '@/components/GifItem';
// others
import { selectRandomIsFetching } from '@/store/reducers/randomRequest/randomRequest.selector';
type randomProps = {
  randomData: any;
};

const trend = <i className="fa fa-line-chart" aria-hidden="true"></i>;

const Random: FC<randomProps> = ({ randomData }) => {
  const loading = useSelector(selectRandomIsFetching);
  return (
    <RandomWrapper>
      <h2>{trend}Trending</h2>
      {loading ? (
        <Loader />
      ) : (
        <GifItem gifItem={randomData} loading={loading} />
      )}
    </RandomWrapper>
  );
};

export default Random;
