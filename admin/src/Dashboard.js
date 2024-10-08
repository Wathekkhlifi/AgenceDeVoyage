
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/clients');
                setClients(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchClients();
    }, []);

    return (
        <div>
            <h2>Client List</h2>
            <ul>
                {clients.map(client => (
                    <li key={client._id}>
                        {client.name} - {client.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
