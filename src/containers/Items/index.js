import React from 'react';
import { Router } from '../../../routes';

// COMPONENTS
import ItemsUI from '../../components/Items';

const Items = ({ data }) => {
    const handleItemClicked = id => {
        Router.pushRoute(`/items/${id}`);
    };

    return <ItemsUI handleItemClicked={handleItemClicked} data={data} />;
};

export default Items;
