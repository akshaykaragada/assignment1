import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const [ImgUrl, setImgUrl] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data),
        setImgUrl(`https://avatars.dicebear.com/api/avataaars/seed.svg?options[mood][]=happy`)
      )
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {loading ? <Loading /> : user.map(user => {
        return (
          <div key={user.id}>
            <div className="card">
              <div class="wrap" >
                <div class="imagebox">
                  <img className="featured-image" src={ImgUrl.replace('seed', user.username)} alt="avatar" />
                </div>
                <div class="textbox">
                  <h3 className="name">{user.name}</h3>
                  <p><b>Email:</b> {user.email}</p>
                  <p><b>Phone:</b> {user.phone}</p>
                  <p><b>Company:</b> {user.company.name}</p>
                  <p><b>Website:</b> {user.website}</p>
                  <p><b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
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
