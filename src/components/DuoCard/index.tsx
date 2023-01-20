import { SetStateAction } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { DuoCardProps } from '../../@types/global';

import { THEME } from '../../theme';

import { DuoInfo } from './components/DuoInfo';

import { GameController } from 'phosphor-react-native';

import { styles } from './styles';

interface Props {
    ad: DuoCardProps;
    onConnect: () => void;
}

export function DuoCard({ ad, onConnect }: Props) {
    const handleRenderDisponibilidade = () => {
        let weekDaysString;

        if (ad.weekDays.length > 1 && ad.weekDays.length !== 0) weekDaysString = "dias";
        else weekDaysString = "dia";

        return `${ad.weekDays.length} ${weekDaysString} ${ad.hourStart}h - ${ad.hourEnd}h`;
    };

    const handleRenderYearsPlaying = (yearsPlaying: number) => {
        let YearsPlayingString;

        if (yearsPlaying === 1) YearsPlayingString = "ano";
        else YearsPlayingString = "anos";

        return `${yearsPlaying} ${YearsPlayingString}`
    };

    const useVoiceChannelColor = ad.useVoiceChannel === true ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT;

    return (
        <View style={styles.duoCard}>
            <DuoInfo
                label='Nome'
                value={ad.name}
            />

            <DuoInfo
                label='Tempo de jogo'
                value={handleRenderYearsPlaying(ad.yearsPlaying)}
            />

            <DuoInfo
                label='Disponibiliadde'
                value={handleRenderDisponibilidade()}
            />

            <DuoInfo
                label='Chamada de áudio?'
                value={ad.useVoiceChannel === true ? "Sim" : "Não"}
                colorValue={useVoiceChannelColor}
            />

            <TouchableOpacity
                style={styles.buttonConnect}
                onPress={onConnect}
            >
                <GameController size={20} color={THEME.COLORS.TEXT} />

                <Text style={styles.ButtonText}>
                    Conectar
                </Text>
            </TouchableOpacity>
        </View>
    );
}