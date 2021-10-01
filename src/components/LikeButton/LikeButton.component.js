import PropTypes from 'prop-types';

export default function LikeButtonComponent({ incrementCount, count }) {
  return <button onClick={incrementCount}>Likes: {count}</button>;
}

LikeButtonComponent.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
};
