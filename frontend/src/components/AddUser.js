import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bulma/css/bulma.css";

const AddUser = () => {
const [nama, setNama]= useState("");
const [email, setEmail]= useState("");
const [status, setStatus]= useState("Lajang");
const navigate = useNavigate();

const saveUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:3100/user", {nama,email,status,});
        navigate("/")
    } catch (error) {
        console.log(error);
    }
}

    return (
        <><section class="hero is-primary is-small">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Nurman JavaScript CRUD Project
                    </h1>
                    <h2 class="subtitle">
                        ADD New User
                    </h2>
                </div>
                {/* <div className="container has-text-centered">
      <h1 className="title">
      <Clock />
      </h1>
    </div> */}
            </div>
        </section>
         <section>
         <div className="container">    
                <div className="columns  is-centered">
                    <div className="column is-half ml-5 mr-5">
                        <form onSubmit={saveUser}>
                            <div className="field">
                                <span className='icon'></span>
                                <i className='fas fa-home'></i>
                                <label className="label">Nama</label>
                                <div className="control">
                                    <input type="text" className="input"  value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Nama' />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Status</label>
                                <div className="control">
                                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option value="Lajang">Lajang</option>
                                        <option value="Menikah">Menikah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <button type='submit' className='button success'>Simpan</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </section></>

    )
}

export default AddUser
