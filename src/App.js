import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import fetchData from './api/index';

import styles from './App.module.css';

class App extends React.Component{

    async componentDidMount(){
        const result = await fetchData();
        console.log(result);
    }

    render(){
        return(
            <div className={styles.container}>
               <Cards/>
               <CountryPicker/>
               <Chart/> 
            </div>
        )
    }
}

export default App