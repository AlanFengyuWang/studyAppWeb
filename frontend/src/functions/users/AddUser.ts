import React from 'react'
import { UserInfo } from '../../types';

export function AddUser(userInfo: UserInfo) {
  const {name, email, image} = userInfo;
  
  const data = { name: {first: name.first, last: name.last}, accountTimeCreated: new Date(), email: email, image: image};
  console.log("data = " + JSON.stringify(data));
  
  //insert
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
  
  // fetch(process.env.SERVERPORT + "/user/add/", requestOptions)
  // .then(response => response.json())
  // .then(data => console.log("data inside = " + JSON.stringify(data)));

  fetch(process.env.SERVERPORT + "/user/add/", requestOptions)
  .then(response => response.json())
  .then(data => console.log("data inside = " + JSON.stringify(data)));
  
  console.log("fetched");
  
}
 