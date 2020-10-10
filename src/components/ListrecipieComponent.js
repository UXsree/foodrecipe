import React from 'react';
import PropTypes from 'prop-types';

const ListrecipieComponent = (props) => {
    return (
        <div>
            this is from list recepie component
            {this.props.posts}
        </div>
    );
};

ListrecipieComponent.propTypes = {};

export default ListrecipieComponent;