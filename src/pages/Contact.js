import React, { Component, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Contact.css"
import { useStateValue } from "../StateProvider";
import { auth,db} from "../firebase";


function Profile() {
  
  const [{ basket, user }, dispatch] = useStateValue();
  const [contact,setContact]=useState("");
  const [email,setEmail]=useState("");
  const [favourites,setFavourites]=useState("");
  const [description,setDescription]=useState("");
  const [city,setCity]=useState("")
  const [username,setUserName]=useState("")
  const [workplace,setWorkplace]=useState("")

  user?(
  db
  .collection("users")
  .doc(user.uid)
  .get()
  .then((docRef) => {
    setEmail(docRef.data().email)
    setContact(docRef.data().contact)
    setCity(docRef.data().city)
    setFavourites(docRef.data().favourites)
    setDescription(docRef.data().description)
    setUserName(docRef.data().username)
    setWorkplace(docRef.data().workplace)
  })
  .catch((error) => { })):console.log("USER DOES not exists")

  console.log(contact)

  // db.collection('users').get().then((snapshot)=>{
  //   snapshot.docs.forEach(doc=>{
  //     console.log(doc.data())
  //   })
  // })


     
  return(  
    <section className="container-1">
    <img id = "back" src="https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY" width="1519" height="400" alt="coverphoto"/>
    <div>
      <div style={{display:"flex", marginButton: 10}}>
        <div>
          <div
            style={{
              width:150,
              height: 150,
              borderRadius: 80,
              overflow:"hidden",
              border: "6px solid  rgb(37, 226, 132)",
              marginTop: -80,
              marginLeft: 50
              }}
          >
          <img className="contacting" src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.30497-1/c94.0.320.320a/p320x320/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=xJbPAeMXf4wAX8qQk04&_nc_ht=scontent-maa2-2.xx&oh=1cce9c5de9c5a219ebe87da0179d7633&oe=5F51E03D"
          width="180" 
          height="180" 
          alt="contactlogo"/>
          </div>
        </div>
        <div id="h">
          <h3>
            <strong>{user ? username+ "" : "Sign In"}</strong>
          </h3>
        </div>
        <div style={{marginLeft: 25,flex:1, marginTop: 20, color:"white"  }}><h3 id="h_">edit</h3></div> 
        </div> 
        <div style={{borderTop : "1px solid lightgray"}}> 
          <div
            style={{
              color:"darkblue",
              fontFamily: "fantasy",
              marginTop: 10
            }}> 
          </div>
        </div> 
       </div>
       <h2>About</h2>
       <div class="title">
         <div class="underline"></div>
       </div>
         <article class="review">
           <div class="img-container">
       <article class="review">
            <h2>Contact Info</h2>
            <p id="author">{}</p>
            <p id="job">ux designer</p>
            <p id="info">Find circle person stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new ...
            </p>
            <p id="e"><strong>📧 Email: {user?(email):"Sign in plz"}</strong></p>
            <p id="e"><strong>📱   Contact no. :{user?(contact):"Sign in plz"} </strong></p>
            <p id="e"><strong>⭐ Favourites :{user?(favourites):"Sign in plz"} </strong></p>
            <p id="e"><strong>Description :{user?(description):"Sign in plz"} </strong></p>
              <textarea id="e" rows="6" cols="45" ></textarea>
              <button type="reset" id="b">Edit</button>
        </article>
 </div>
      </article>  
      <article class="review">
            <div class="img-container2">
              <h3 id="m">More...</h3>
              <p></p>
              <p></p>
              <p id="e"><strong>🏢 Workplace:{user?(workplace):"Sign in plz"} </strong></p>
              <p></p>
              <p id="e"><strong>🏙️ City: {user?(city):"Sign in plz"}</strong></p>
              <p></p>
              <p></p>
              <p></p>

            </div>
            </article>

            <Link to="/" className="link">Back to home page➡️</Link>
          </section>
         
    
       )}
export default Profile;