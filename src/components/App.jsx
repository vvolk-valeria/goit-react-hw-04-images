import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Searchbar onSubmit={setSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />

      <ToastContainer autoClose={3000} />
    </div>
  );
}
