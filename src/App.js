import React from 'react';
import {UserId,UserForm } from './components';
import styles from './App.module.css';

class App extends React.Component {

    render() { 

        return (  
            <div className={styles.container}>
                
             
               <UserForm />
        
            </div>
        );
    }
}
 
export default App;

