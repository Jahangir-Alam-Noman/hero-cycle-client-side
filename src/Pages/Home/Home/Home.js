import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Home.css';
import { Button } from 'react-bootstrap';

const Home = () => {
     const {user,logOut,signInWithGoogle} =  useAuth();
    return (
        <div>
            <h1>{user.displayName}</h1>
            <h2>This is Home Page </h2>
            {/* <button onClick={signInWithGoogle} type="submit">Google Sign In</button> <br/> */}
            <Button  onClick={signInWithGoogle} type="submit" variant="success">Google Sign In</Button>{' '}

            <Button  onClick={logOut} type="submit" variant="danger">Log Out</Button>{' '}

           <h3><i class="fa fa-facebook-square" aria-hidden="true"></i></h3>
           <button type='submit' className='btn btn-primary fw-bolder'>From     Bootstrap</button> <br></br>
           <Button variant="outline-info">React bootstrap added</Button>{' '}
        </div>
    );
};

export default Home;