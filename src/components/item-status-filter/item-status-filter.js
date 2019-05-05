import React from "react"


const ItemStatusfilter = () => {
    return (
        <div className = "btn-group">
            <button type= "button"
                className = "btn btn-info">All</button>
            <button type= "button"
                className = "btn btn-outline-scondary">Active</button>
            <button type= "button"
                className = "btn btn-outline-scondary">Done</button>
        </div>
    );
};
export default ItemStatusfilter;