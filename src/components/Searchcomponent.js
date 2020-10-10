import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class searchcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <label>
                    Search for a recipie:
                    <input type="text" onChange={handleChange} />
                </label>
                <button>search</button>
                <Button variant="primary">Search recipe</Button>
            </div>
        );
    }
}

searchcomponent.propTypes = {};

export default searchcomponent;
