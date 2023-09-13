// libs
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// components
import Header from '@/components/Header';
import Button from '@/components/Button';
import Trending from '@/components/Trending';
import Random from '@/components/Random';
import Search from '@/components/Search';
// styled-components
import { HomePageWrapper, FetchButtons, Main } from './HomePage.styled';
// hooks
import { useAppDispatch } from '@/store/hook';
// saga
import { requestTrendingRequest } from '@/store/reducers/trendingRequest/trendingRequest.slice';
import { selectTrendingRequest } from '@/store/reducers/trendingRequest/trendingRequest.selector';
import { requestRandomRequest } from '@/store/reducers/randomRequest/randomRequest.slice';
import { selectRandomRequest } from '@/store/reducers/randomRequest/randomRequest.selector';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const trendingData = useSelector(selectTrendingRequest);
  const randomData = useSelector(selectRandomRequest);
  //state
  const [rendered, setRendered] = useState('trending');
  const content = () => {
    switch (rendered) {
      case 'trending':
        return <Trending trendingData={trendingData} />;
      case 'random':
        return <Random randomData={randomData} />;
      case 'search':
        return <Search />;
      default:
        return <Trending trendingData={trendingData} />;
    }
  };
  useEffect(() => {
    dispatch(requestTrendingRequest());
    dispatch(requestRandomRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomePageWrapper>
      <Header setRendered={setRendered} />
      <FetchButtons>
        <Button
          name={'Trending'}
          icon={<i className="fa fa-line-chart" aria-hidden="true"></i>}
          onClick={() => {
            setRendered('trending');
          }}
        />
        <Button
          name={'Random'}
          icon={<i className="fa fa-random" aria-hidden="true"></i>}
          onClick={() => {
            setRendered('random');
          }}
        />
      </FetchButtons>
      <Main>{content()}</Main>
    </HomePageWrapper>
  );
};

export default HomePage;
