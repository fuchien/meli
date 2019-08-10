import React, { useEffect } from 'react';
import { Router } from '../../../routes';

// COMPONENTS
import ItemsUI from '../../components/Items';

const Items = ({ data, errMsg }) => {
    const handleItemClicked = id => {
        Router.pushRoute(`/items/${id}`);
    };

    const validationErr = err => {
        if (err) {
            Router.pushRoute('/');
        }
    };

    useEffect(() => {
        validationErr(errMsg);
    }, [errMsg]);

    return (
        <>
            {data && (
                <ItemsUI handleItemClicked={handleItemClicked} data={data} />
            )}
        </>
    );
};

export default Items;
