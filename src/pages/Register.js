import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { auth,db} from "../firebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Register.css"
import { BorderInner } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password:"",
    contact:"",
    city:"",
    favourites:"",
    description:"",
    workplace:"",
  })

  const { username, email, password, contact,city,favourites,description,workplace } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const classes = useStyles();
  const register = (e) => {
    e.preventDefault();
    // auth.createUserWithEmailAndPassword(email, password).then(cred=>{
    //   db.collection('users').doc(cred.user.uid).set(formData)
    //   }).then(()=>{
    //     history.push("/");
    //   })
    //   .catch((e) => alert(e.message));

      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        db.collection('users').doc(auth.user.uid).set(formData)
        auth.user.updateProfile({
          displayName: username,
        });

        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <Container maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='username'
                label='username'
                name='username'
                autoComplete='lname'
                value={username}
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </Grid>
          </Grid>
          <div className="c">
            <TextField
              variant='outlined'
              required
              halfWidth
              id='contact'
              label='Contact'
              name='contact'
              autoComplete='contact'
              value={contact}
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant='outlined'
              required
              halfWidth
              id='city'
              label='City'
              name='city'
              autoComplete='city'
              value={city}
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant='outlined'
              required
              halfWidth
              id='favourites'
              label='favourites'
              name='favourites'
              autoComplete='favourites'
              value={favourites}
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant='outlined'
              required
              halfWidth
              id='description'
              label='description'
              name='description'
              autoComplete='description'
              value={description}
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant='outlined'
              required
              halfWidth
              id='workplace'
              label='workplace'
              name='workplace'
              autoComplete='workplace'
              value={workplace}
              onChange={(e) => onChange(e)}
            />
           </div>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
