import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { LoadingContext } from '../LoadingContext';
import Loading from '../components/loading/Loading';

const Auxiliary = props => {
    const { loading, setLoading } = useContext(LoadingContext);

    return (
        <View style={{ ...props.style }}>{loading ? <Loading /> : props.children}</View>
    )
}



export default Auxiliary;