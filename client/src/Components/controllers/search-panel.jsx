import React from "react";
import {Input, Button} from 'reactstrap'
const SearchPanel = ({term, handleSearch, toggleForm}) => (
    <div className="d-flex">
        <Input 
            placeholder="Enter Search Term"
            className="mr-3"
            value={term}
            onChange={e => handleSearch(e.target.value)}
        />

        <Button color="success" onClick={toggleForm} >
            New
        </Button>
    </div>
)
export default SearchPanel