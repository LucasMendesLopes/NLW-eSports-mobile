import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 30
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },
  subtitle: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_400,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});