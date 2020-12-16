import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./Discover.css";
import Post from "./Post";
import { db, auth } from "../firebase";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { useStateValue } from "../StateProvider";
import GameCreate from "../components/GameCreate";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal() {
  const [{ user }, dispatch] = useStateValue();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);
  console.log(posts);
  return (
    <div className='discover'>
      <div>
        <button type='button' onClick={handleOpen} className='xx'>
          + CREATE GAME
        </button>
        <Modal
          aria-labelledby='spring-modal-title'
          aria-describedby='spring-modal-description'
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              {user?.displayName ? (
                <GameCreate username={user.displayName} />
              ) : (
                <h3>Sorry...Log in to creat game</h3>
              )}
            </div>
          </Fade>
        </Modal>
      </div>
      {console.log(posts)}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
          desc={post.description}
          name={post.name}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
}
