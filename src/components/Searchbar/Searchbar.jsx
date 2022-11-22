import PropTypes from 'prop-types';
import { useState } from 'react';
import { Header, Form, Btn, Span, Input } from './Searchbar.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Enter term for search images and photos.');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    e.target.reset();
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <Span>Search</Span>
        </Btn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameChange}
          value={searchQuery}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
