import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css"; // Impor Bulma CSS
// import Clock from './Clock.js';

const UserList = () => {
    const [user, setuser] = useState([]);
useEffect(()=>{
    getUser();
},[]);
    const getUser = async () => {
        const response = await axios.get('http://localhost:3100/user');
        setuser(response.data);
    };

    const deleteUser = async (id) => {
        try {
          await axios.delete(`http://localhost:3100/user/${id}`);
          getUser();
        } catch (error) {
          console.log(error);
        }
      };

  return (
   <><section class="hero is-primary is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
           Nurman JavaScript CRUD Project
          </h1>
          <h2 class="subtitle">
            Portofolio
          </h2>
        </div>
        {/* <div className="container has-text-centered">
          <h1 className="title">
          <Clock />
          </h1>
        </div> */}
      </div>
    </section>
    
    <section class="section is-small">
      <div class="container">
        <div className="columns  is-centered">
          <div className="column">
             <div className="hero is-primary">
              <div className='column'>
                <card>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aspernatur. Enim voluptas expedita veniam consequatur totam placeat officia maiores velit nemo ipsam? Laudantium magni molestiae at assumenda in repellat! Distinctio.
                </card>
              </div> 
             </div>
          </div>
          <div className="column is-four-fifths">
            <Link to={`add`} className="button is-success is-left">
              Add New
            </Link>
            <table className="table is-centered is-striped">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.nama}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>
                      <Link
                        to={`edit/${user.id}`}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="button is-small is-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='column'>
              <aside className="Menu">
                <p className="menu label">General</p>
                  <ul className='menu list'>
                    <li><a>Dashboard</a></li>
                    <li><a>Costumer</a></li>
                  </ul>
              </aside>
            </div>
      </div>
  </section></>
)
}

export default UserList;
