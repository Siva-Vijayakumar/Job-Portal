import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [searchfilter, setsearchfilter] = useState({
        title:'',
        location:'',
    });

    const [isSearched, setIsSearched] = useState(false);
    const [jobs, setJobs] = useState([]);

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

    // Function to fetch jobs
    const fetchjobs = async () => {
        setJobs(jobsData)
    }

    useEffect(() => {
        fetchjobs()
    }, [])

    const value = {
        setsearchfilter, searchfilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
        
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </ AppContext.Provider>
    );
}