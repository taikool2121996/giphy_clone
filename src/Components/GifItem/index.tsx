// libs
import { FC, useState } from 'react';
// styled-components
import { GifItemWrapper } from './GifItem.styled';
type GifItemProps = {
  gifItem: any;
  loading: boolean;
  rendered?: string;
};
// components
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';

const Trending: FC<GifItemProps> = ({ gifItem, loading }) => {
  const [modal, setModal] = useState(false);
  return (
    <GifItemWrapper>
      {modal && (
        <Modal
          title={gifItem.title}
          gif={gifItem.images.original.url}
          link={gifItem.images.original.url}
          rating={gifItem.rating}
          embed_url={gifItem.embed_url}
          setModal={setModal}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <div
          className="gif"
          onClick={() => {
            setModal(true);
          }}
        >
          <img src={gifItem.images.original.url} alt={gifItem.title} />
        </div>
      )}
    </GifItemWrapper>
  );
};

export default Trending;
