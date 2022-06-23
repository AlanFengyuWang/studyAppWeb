import React, { useEffect, useState } from 'react'


export default async function UserisExist(email:string) {
  const dest = process.env.SERVERPORT + "/user/email/" + email;
  const res = await fetch(dest)
  const data = await res.json();
  return data !== "";
}
