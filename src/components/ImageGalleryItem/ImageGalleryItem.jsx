import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Item } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ id, webformatURL, largeImageURL, tags }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Item key={id} onClick={toggleModal}>
        <img src={webformatURL} alt={tags} />
      </Item>

      {showModal && (
        <Modal
          key={id}
          onClose={toggleModal}
          largeImageURL={largeImageURL}
          tags={tags}
        ></Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
