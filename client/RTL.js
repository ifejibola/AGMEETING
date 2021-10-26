import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import stylisRTLPlugin from 'stylis-plugin-rtl';

const styleCache = () => createCache({
    key: 'rtl',
    prepend: true,
    // We have to temporary ignore this due to incorrect definitions
    // in the stylis-plugin-rtl module
    // @see https://github.com/styled-components/stylis-plugin-rtl/issues/23
    stylisPlugins: [stylisRTLPlugin]
});

const RTL = (props) => {
    const {children, direction} = props;

    useEffect(() => {
        document.dir = direction;
    }, [direction]);

    if (direction === 'rtl') {
        console.log('direction?? ', direction)
        console.log('children?? ', children)
        // console.log('children?? ', children)
        console.log('props?? ', props)
        return (
            <CacheProvider value={styleCache()}>
                {children}
            </CacheProvider>
        );
    }

    return <>{children}</>;
};

RTL.propTypes = {
    // children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['ltr', 'rtl'])
};

export default RTL;
