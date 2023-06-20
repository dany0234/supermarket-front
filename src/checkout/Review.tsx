import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

interface Payment {
  name: string;
  detail: string;
}

interface ReviewProps {
  address: string[];
  products: {
    name: string;
    desc: string;
    price: string;
  }[];
  payment: Payment[];
}

export default function Review({ address, products, payment }: ReviewProps) {
  const lastFourDigits = payment.find((item) => item.name === 'Card number')?.detail.slice(-4);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06 {/* Replace with the actual total price */}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{address.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payment.map((item) => (
              <React.Fragment key={item.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{item.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    {item.name === 'Card number' ? `xxxx-xxxx-xxxx-${lastFourDigits}` : item.detail}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
