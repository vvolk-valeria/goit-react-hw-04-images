import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export function Button({ loadMore, children }) {
  return (
    <Btn type="button" onClick={loadMore}>
      {children}
    </Btn>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
