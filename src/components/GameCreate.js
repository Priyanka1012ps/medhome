import React, { useState } from "react";
import { db, storage } from "../firebase";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./GameCreate.css";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "70ch",
    },
  },
}));

function GameCreate() {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [{ user }, dispatch] = useStateValue();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    var d = new Date();
    console.log(d.toUTCString());
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // const uploadTask=storage.ref(`images/${image.name}`).put(image)

    //FUNCTION TO SHOW PROGRESS OF UPLOADING
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function.
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //Error function
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: new Date().toUTCString(),
              description: description,
              imageUrl: url,
              username: user.displayName,
            });
            setDescription("");
            setImage(null);
            setProgress(0);
          });
      }
    );
  };

  return (
    <div>
      {}
      <form className={classes.root} noValidate autoComplete='off'>
        <div className='head1'>
          <h3 className='mx-3'>Description</h3>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <progress
            value={progress}
            max='100'
            className='imageUpload__progress'
          />
          <input type='file' onChange={handleChange} />
          <Button onClick={handleUpload}>Upload</Button>
        </div>
      </form>
    </div>
  );
}

export default GameCreate;
