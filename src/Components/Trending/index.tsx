// libs
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
// styled-components
import { TrendingWrapper } from './Trending.styled';
// components
import Loader from '@/components/Loader';
import GifItem from '@/components/GifItem';
// others
import { selectTrendingIsFetching } from '@/store/reducers/trendingRequest/trendingRequest.selector';
type trendingProps = {
  trendingData: any[];
};
const trend = <i className="fa fa-line-chart" aria-hidden="true"></i>;

const Trending: FC<trendingProps> = ({ trendingData }) => {
  const loading = useSelector(selectTrendingIsFetching);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <TrendingWrapper>
      <h2>{trend}Trending</h2>
      {loading && <Loader />}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {trendingData &&
          trendingData.map((gif: any) => {
            return <GifItem key={gif.id} gifItem={gif} loading={loading} />;
          })}
      </Masonry>
    </TrendingWrapper>
  );
};

export default Trending;
