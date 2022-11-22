import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, largeImageURL, tags }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalImg src={largeImageURL} alt={tags} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
