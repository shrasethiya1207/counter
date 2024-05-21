import React, { useMemo } from 'react'
import largeFile from "../utills/large-file.json";


const getLength = (arr)=>{
    let val = 0 ;
    for(let i=0 ; i< arr.length ; i++) val++;
    return val;
}

const MyComponents = (props) => {
    // const totalEntries = getLength(largeFile)
    const totalEntries = useMemo(()=>getLength(largeFile),[]);

    return (
        <div>
            <h2>My Components</h2>
              <span>Count {props.count}</span>
             <h2>Total Entries </h2>
            <div>
                <span>{totalEntries}</span>
            </div>
        </div>

    )
}

export default MyComponents