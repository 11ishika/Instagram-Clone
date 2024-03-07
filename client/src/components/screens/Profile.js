import React,{useEffect,useState,useContext} from "react";
import {UserContext} from '../../App'

const Profile = () => {
  const [mypics,setPics]=useState([])
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    fetch('/mypost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      setPics(result.mypost)
    })
  })
  return (
    <div style={{
        maxWidth:"550px",
        margin:"0 auto"
    }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
        <div>
          <h4>{state?state.name:"loading"}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
      {
        mypics.map(item=>{
          return(
            <img key={item._id} className="item" src={item.photo} alt={item.title}/>
          )
        })
      }

            </div>
    </div>
  );
};

export default Profile;
