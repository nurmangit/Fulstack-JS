import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css'; 
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
const [nama, setNama]= useState("");
const [email, setEmail]= useState("");
const [status, setStatus]= useState("Lajang");
const navigate = useNavigate();
const {id} = useParams();

useEffect(()=> {
   
  getUserById();
},[]);

  async function saveUser(e) {
    e.preventDefault();
    // console.log({nama : nama ,email,status})
    try {
      await axios.patch(`http://localhost:3100/user/${id}`, { nama , email, status, });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

const getUserById = async () =>{
    
const response = await axios.get(`http://localhost:3100/user/${id}`);

setNama(response.data.nama);
setEmail(response.data.email);
setStatus(response.data.status);
}

    return (
        <><section class="hero is-primary is-small">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Nurman JavaScript CRUD Project
                    </h1>
                    <h2 class="subtitle">
                        Edit User
                    </h2>
                </div>
                {/* <div className="container has-text-centered">
      <h1 className="title">
      <Clock />
      </h1>
    </div> */}
            </div>
        </section>
        <div>
            <div className="columns is-centered">
                <div className="column is-half mt-3 ml-5 mr-5">
                    <form onSubmit={saveUser}>

                        <div className="field">
                            <label className="label">Nama</label>
                            <div className="control">
                                <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Nama' />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email' />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Status</label>
                            <div className="control">
                                <select value={status} onChange={(e) => setStatus(e.target.value)} >
                                    <option value="Lajang">Lajang</option>
                                    <option value="Menikah">Menikah</option>
                                </select>
                            </div>
                        </div>

                        <div className="field">
                            <button type='submit' className='button success'>Update</button>
                        </div>


                    </form>
                </div>
            </div>
        </div></>

    )
}

export default EditUser
