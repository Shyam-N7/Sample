import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function StudentDetails() {

    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/")
            .then((res) => {
                setStudent(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="HomepageBody">
            <h1><span><u>Registered Students</u></span></h1>
            <table border="2" className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>USN</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.usn}</td>
                                <td>{data.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
