import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Review from "./Review"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddressForm() {
    const [formData, setFormData] = useState({
    fname: "",
    address:"",
    city:"",
    state:"",
    zip:"",
    country:"",
  });
  const { fname,lname,address,city,zip,country } = formData;
  const classes = useStyles();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='fname'
            name='fname'
            label='First Name'
            fullWidth
            value={fname}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lname'
            name='lname'
            label='Last Name'
            fullWidth
            value={lname}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address'
            name='address'
            label='Address line 1'
            fullWidth
            autoComplete='shipping address-line1'
            value={address}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='City'
            fullWidth
            autoComplete='shipping address-level2'
            value={city}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Zip / Postal code'
            fullWidth
            autoComplete='shipping postal-code'
            value={zip}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='country'
            name='country'
            label='Country'
            fullWidth
            autoComplete='shipping country'
            value={country}
            onChange={(e) => onChange(e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{fname} {lname}</Typography>
          <Typography gutterBottom>{address}</Typography>
        </Grid>
      </Grid>

    </React.Fragment>
  );
}
