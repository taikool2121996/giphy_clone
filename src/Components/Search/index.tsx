import { FC } from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
// styled-components
import { SearchWrapper } from './Search.styled';
// components
import Loader from '@/components/Loader';
import GifItem from '@/components/GifItem';
// others
import {
  selectSearchRequest,
  selectSearchIsFetching,
} from '@/store/reducers/searchRequest/searchRequest.selector';

const list = <i className="fa fa-line-chart" aria-hidden="true"></i>;

const Search: FC = () => {
  const loading = useSelector(selectSearchIsFetching);
  const searchResults = useSelector(selectSearchRequest);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <SearchWrapper>
      <h2>{list}Search Results</h2>
      {loading && <Loader />}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {searchResults &&
          searchResults.map((gif: any) => {
            return <GifItem key={gif.id} gifItem={gif} loading={loading} />;
          })}
      </Masonry>
    </SearchWrapper>
  );
};

export default Search;
