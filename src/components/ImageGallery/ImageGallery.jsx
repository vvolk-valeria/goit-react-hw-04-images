import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchImg } from '../services/img-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { Loader, BtnLoader } from '../Loader/Loader';
import {
  Container,
  Gallery,
  InitialPhrase,
  BtnChildren,
} from './ImageGallery.styled';
import { Button } from '../Button/Button';

const PER_PAGE = 12;

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export function ImageGallery({ searchQuery }) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  if (searchQuery !== query) {
    setPage(1);
    setItems([]);
    setQuery(searchQuery);
  }

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setStatus(Status.PENDING);
    fetchImg(searchQuery, page, PER_PAGE)
      .then(items => {
        const { hits, totalHits } = items;

        if (totalHits === 0 || hits.lenght === 0) {
          toast.error(
            'No results were found for your request! Try something else!'
          );
          setStatus(Status.IDLE);
          return;
        } else {
          setItems(items => (page === 1 ? [...hits] : [...items, ...hits]));
          setStatus(Status.RESOLVED);

          if (page >= totalHits / hits.length || hits.length === 0) {
            toast.error(
              `We're sorry, but you've reached the end of search results.`
            );
            return;
          }
        }
      })
      .catch(error => {
        console.log(error);
        setStatus(Status.REJECTED);
      });
  }, [query, searchQuery, page]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  if (status === Status.IDLE) {
    return (
      <Container>
        <InitialPhrase>Enter a search term.</InitialPhrase>
      </Container>
    );
  }
  if (status === Status.REJECTED) {
    return toast.error('Oops! Something is wrong!');
  }

  if (status === Status.PENDING || status === Status.RESOLVED) {
    return (
      <Container>
        <Gallery>
          {items.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            );
          })}
        </Gallery>
        {items.length < PER_PAGE ? (
          ''
        ) : (
          <Button loadMore={loadMore}>
            {status === Status.RESOLVED && <BtnChildren>Load more</BtnChildren>}
            {status === Status.PENDING && <BtnLoader />}
          </Button>
        )}
        {status === Status.PENDING && <Loader />}
      </Container>
    );
  }

  // if (status === Status.RESOLVED) {
  //   return (
  //     <Container>
  //       <Gallery>
  //         {items.map(({ id, webformatURL, largeImageURL, tags }) => {
  //           return (
  //             <ImageGalleryItem
  //               key={id}
  //               webformatURL={webformatURL}
  //               largeImageURL={largeImageURL}
  //               tags={tags}
  //             />
  //           );
  //         })}
  //       </Gallery>
  //       {items.length < PER_PAGE ? (
  //         ''
  //       ) : (
  //         <Button loadMore={loadMore}>
  //           <BtnChildren>Load more</BtnChildren>
  //         </Button>
  //       )}
  //     </Container>
  //   );
  // }
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
