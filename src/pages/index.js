import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Index() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        console.log(res.data.data);
        setEmployees(res.data.data);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

  const lists = employees.map(r => {
    return <p key={r.id}>{r.employee_name}</p>;
  });
  return (
    <>
      <h1>Home</h1>
      <Link to="/counter">Counter</Link>
      {lists}
    </>
  );
}

export default Index;
