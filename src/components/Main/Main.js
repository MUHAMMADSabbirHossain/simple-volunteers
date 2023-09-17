import React, { useEffect, useState } from 'react';
import "./Main.css";
import Activity from '../Activity/Activity';
import useVolunteers from '../../hooks/useVolunteers';

const Main = () => {
    // const [volunteers, setVolunteers] = useVolunteers();

    const [searchResult, setSearchResult] = useState([]);
    /* const handleSearchChange = (event) => {
        // console.log(event.target.value)
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.title.includes(searchText));
        setSearchResult(match);
    }; */

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        // console.log("cliked");
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText));
                setSearchResult(match);
            });
    }, [searchText]);
    const handleSearchChange = (event) => {
        // console.log(event.target.value)
        const searchText = event.target.value;
        setSearchText(searchText);
    };


    return (
        <div>
            <h2>Volunteer Activities: {setSearchResult.length}</h2>

            <div style={{ "margin": "20px" }}>
                <input onChange={handleSearchChange} type="text" placeholder='Search' />
            </div>

            <div className='activity-container'>
                {
                    searchResult.map(activity => <Activity key={activity._id} activity={activity}></Activity>)
                }
            </div>
        </div >
    );
};

export default Main;