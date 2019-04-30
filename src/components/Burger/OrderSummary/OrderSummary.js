import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType='Danger' clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button buttonType='Success' clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

OrderSummary.propTypes = {
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.object.isRequired,
  purchaseCanceled: PropTypes.func,
  purchaseContinued: PropTypes.func
};

export default OrderSummary;
