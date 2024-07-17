import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <Box
      style={{
        padding: '20px',
        border: '1px solid lightgray',
        backgroundColor: '#fff',
        borderRadius: '5px',
      }}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Typography variant='body1' style={{ marginBottom: '10px' }}>
              Subtotal ({basket.length} items): <strong>${value}</strong>
            </Typography>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label='This order contains a gift'
              style={{ marginBottom: '20px' }}
            />
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
      />
      <Button variant='contained' color='primary' style={{ width: '100%' }}>
        Proceed to Checkout
      </Button>
    </Box>
  );
}

export default Subtotal;
