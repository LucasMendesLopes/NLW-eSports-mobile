import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        paddingHorizontal: 27,
        marginBottom: 20,
    },
    logoImage: {
        width: 70,
        height: 40,
    },
    backIcon: {
        width: 10,
        height: 30
    },
    right: {
        width: 25,
        height: 25
    },
    gameBanner: {
        width: 311,
        height: 160,
        borderRadius: 8,
        marginBottom: 10
    },
    containerList: {
        width: "100%"
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: "flex-start"
    },
    emptyListContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emptyListText: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    }
});