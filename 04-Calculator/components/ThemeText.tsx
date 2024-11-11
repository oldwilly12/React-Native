import { View, Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/global-styles';

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
    // como children es una prop por eso no la introduciomos
}

//Pasar todas las props restantes con el "...rest"
const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
    return (

        <Text
            style={[{ color: 'white', fontFamily: 'SpaceMono' },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
        >{children}</Text>

    )
}

export default ThemeText