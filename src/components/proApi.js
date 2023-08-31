import React, { useState } from 'react';
import Loading from './Loading';
import './ProApi.css';

const ProApi = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://reqres.in/api/users?page=1');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
            setShowUsers(true);
        } catch (error) {
            console.log('Your error is: ' + error);
            setLoading(false);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h3 className='new'>LETSGROWMORE</h3>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

                        <button type="button" className="btn btn-primary" onClick={getUsers}>
                            Show Users
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container py-5">
                {loading && <Loading />}

                {showUsers && (
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {users.data.map((currelem) => (
                            <div className="col" key={currelem.id}>
                                <div className="card">
                                    <img src={currelem.avatar} className="card-img-top" alt="User Avatar" />
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {currelem.first_name} {currelem.last_name}</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content.
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">{currelem.email}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProApi;
