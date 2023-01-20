import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    duoCard: {
        padding: 10,
        marginRight: 24,
        marginTop: 20,
        width: 180,
        height: 240,
        backgroundColor: THEME.COLORS.SHAPE,
        justifyContent: "space-between",
        borderRadius: 8,
        color: THEME.COLORS.TEXT
    },
    buttonConnect: {
        width: "100%",
        flexDirection: "row",
        height: 36,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
        alignItems: "center",
        justifyContent: "center"
    },
    ButtonText: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        color: THEME.COLORS.TEXT,
        marginLeft: 8
    },
    disponibility: {
        flexDirection: "row"
    }
});