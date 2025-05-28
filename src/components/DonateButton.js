import React from 'react';
import PropTypes from 'prop-types';
import './DonateButton.css';

const DonateButton = ({ donated }) => {
  const handleClick = () => {
    const url =
      'https://yoomoney.ru/quickpay/confirm.xml?receiver=410011338040929&quickpay-form=shop&targets=PROJECT_X&sum=100&label=PROJECT_X';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className={`donate-button ${donated ? 'clicked' : ''}`}
      onClick={handleClick}
      aria-pressed={donated}>
      PROJECT X
    </button>
  );
};

DonateButton.propTypes = {
  donated: PropTypes.bool,
};

export default DonateButton;
