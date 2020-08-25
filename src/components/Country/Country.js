import React from 'react';

const Country = (props) => {
    
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={{border:'1px solid gray', padding:'10px',width:'20%', height:'200px', margin:'10px', float:'left', lineHeight:'5px',}}>
            <img style={{height:'75px', width:'100px'}} src={flag} alt="Not found"/>
            <h4>{name}</h4>
            <p>Population = {population}</p>
            <small>Region = {region}</small><p></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;