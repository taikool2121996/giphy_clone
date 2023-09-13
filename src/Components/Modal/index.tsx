// libs
import { FC } from 'react';
// styled-components
import {
  ModalWrapper,
  ModalModal,
  ModalContent,
  Overlay,
} from './Modal.styled';
type ModalProps = {
  setModal: any;
  gif: any;
  title: string;
  rating: string;
  link: string;
  embed_url: string;
};

const Modal: FC<ModalProps> = ({
  setModal,
  gif,
  title,
  link,
  embed_url,
  rating,
}) => {
  return (
    <ModalWrapper>
      <ModalModal>
        <ModalContent>
          <img src={gif} alt="" className="giff" />
          <div className="text-content">
            <h3>{title}</h3>
            <h4>Rating: {rating}</h4>

            <div className="share-item share">
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${link}`}
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-share" aria-hidden="true"></i>
                <span>Share</span>
              </a>
            </div>
            <div className="share-item embed">
              <a href={embed_url} target="_blank" rel="noopener">
                <i className="fa fa-code" aria-hidden="true"></i>
                <span>Embed</span>
              </a>
            </div>
            <div className="share-item giffy">
              <a href={link} target="_blank" rel="noopener">
                <i
                  className="fa fa-external-link-square"
                  aria-hidden="true"
                ></i>

                <span>Giphy</span>
              </a>
            </div>
          </div>
        </ModalContent>
      </ModalModal>
      <Overlay onClick={() => setModal(false)}></Overlay>
    </ModalWrapper>
  );
};

export default Modal;
