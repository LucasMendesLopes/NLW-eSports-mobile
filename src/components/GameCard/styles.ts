import { StyleSheet } from 'react-native';

import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginRight: 24,
    },
    cover: {
        width: 220,
        height: 300,
        borderRadius: 8,
        justifyContent: "flex-end",
        overflow: "hidden"
    },
    footer: {
        width: "100%",
        height: 120,
        padding: 16,
        justifyContent: "flex-end"
    },
    name: {
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: THEME.COLORS.TEXT
    },
    ads: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.CAPTION_400
    }
});