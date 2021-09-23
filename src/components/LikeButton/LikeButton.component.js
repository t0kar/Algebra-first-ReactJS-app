import PropTypes from 'prop-types';

export default function LikeButtonComponent({
  incrementCount,
  count = this.props,
}) {
  return <button onClick={incrementCount}>Likes: {count}</button>;
}

LikeButtonComponent.propTypes = {
  count: PropTypes.number,
};
