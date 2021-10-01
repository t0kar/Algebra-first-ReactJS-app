import PropTypes from 'prop-types';

export default function CoinTossComponent({ isHeads, tossCoin }) {
  return (
    <div>
      <span>
        The result of the coin toss is {isHeads && 'heads'}{' '}
        {!isHeads && 'tails'}.
      </span>
      <br />
      <button onClick={tossCoin}>Toss the coin</button>
    </div>
  );
}

CoinTossComponent.propTypes = {
  isHeads: PropTypes.string,
  tossCoin: PropTypes.func,
};
