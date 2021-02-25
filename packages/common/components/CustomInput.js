import React from 'react';
import { TextInput } from 'react-native';
import { styled } from '@ui-kitten/components';

@styled('CustomInput')
class CustomInput extends React.Component {
    render() {
        const { eva, style, ...restProps } = this.props;

        return (
            <TextInput style={[eva.style, style]} {...restProps} />
        );
    }
}

export default CustomInput