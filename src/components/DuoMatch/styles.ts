import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: THEME.COLORS.OVERLAY
    },
    content: {
        width: "90%",
        // height: 322,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        // padding: 40,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between"
    },
    closeIcon: {
        alignSelf: "flex-end",
        margin: 16
    },
    label: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        marginTop: 24,
        marginBottom: 8
    },
    discordButton: {
        width: 231,
        height: 48,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        marginBottom: 32

    },
    discord: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    }
    // DiscordModalContainer: {
    //     position: "absolute",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     zIndex: 1,
    //     width: "100%",
    //     height: "100%",
    // },
    // DiscordModal: {
    //     width: "90%",
    //     height: 322,
    //     backgroundColor: THEME.COLORS.TEXT,
    //     borderRadius: 8,
    //     padding: 40
    // }
});