import React from 'react'
import { UserInfo } from '../../types';

export function addUser(userInfo: UserInfo) {
  const {name, email, image} = userInfo;
  
  const data = { name: {first: name.first, last: name.last}, accountTimeCreated: new Date(), email: email, image: image};
  
  //insert
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };

  fetch(process.env.SERVERPORT + "/user/add/", requestOptions)
}
 