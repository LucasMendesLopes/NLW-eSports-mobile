import React from 'react';
import {
    View,
    Text,
    ColorValue
} from 'react-native';
import { THEME } from '../../../../theme';

import { styles } from './styles';

interface DuoInfoProps {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

export function DuoInfo({
    label,
    value,
    colorValue = THEME.COLORS.TEXT
}: DuoInfoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.duoLabel}>{label}</Text>
            <Text
                style={[styles.duoValue, { color: colorValue }]}
                numberOfLines={1}
            >
                {value}
            </Text>
        </View >
    );
}