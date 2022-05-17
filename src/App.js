import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import './App.css';

function App() {
  const [UserVar, setUserVaf] = useState([]);
  const [ImgUrlVar, setImgUrlVaf] = useState([]);
  const [LoadingVar, setLoadingVaf] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingVaf(false)
    }, 4000)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUserVaf(data),
        setImgUrlVaf(`https://avatars.dicebear.com/api/avataaars/seed.svg?options[mood][]=happy`)
      )
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {LoadingVar ? <Loading /> : UserVar.map(UserVar => {
        return (
          <div key={UserVar.id}>
            <div className="card">
              <div class="wrap" >
                <div class="imagebox">
                  <img className="featured-image" src={ImgUrlVar.replace('seed', UserVar.username)} alt="avatar" />
                </div>
                <div class="textbox">
                  <h3 className="name">{UserVar.name}</h3>
                  <p><b>Email:</b> {UserVar.email}</p>
                  <p><b>Phone:</b> {UserVar.phone}</p>
                  <p><b>Company:</b> {UserVar.company.name}</p>
                  <p><b>Website:</b> {UserVar.website}</p>
                  <p><b>Address:</b> {UserVar.address.street}, {UserVar.address.suite}, {UserVar.address.city}, {UserVar.address.zipcode}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
