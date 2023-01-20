import { useState } from 'react';
import {
    View,
    Modal,
    ModalProps,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';

import { THEME } from '../../theme';

import { Heading } from '../Heading';

import { CheckCircle, X } from "phosphor-react-native"
import { Loading } from '../Loading';

interface DuoMatchProps extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
    const [isCopying, setIsCopying] = useState(false);

    async function handleDiscordCopyToClipboard() {
        setIsCopying(true);
        await Clipboard.setStringAsync(discord);

        Alert.alert("Discord Copiado!", "Usuário copiado para você colocar no discord.")
        setIsCopying(false)
    };

    return (
        <Modal
            statusBarTranslucent
            transparent
            animationType='fade'
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeIcon}
                    >
                        <X
                            color={THEME.COLORS.CAPTION_500}
                            size={30}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        title='Let’s play!'
                        subtitle='Agora é só começar a jogar!'
                        style={{ alignItems: "center", marginTop: 24 }}
                    />

                    <Text style={styles.label}>Adicione no Discord</Text>

                    <TouchableOpacity
                        onPress={handleDiscordCopyToClipboard}
                        style={styles.discordButton}
                        disabled={isCopying}
                    >
                        <Text style={styles.discord}>
                            {isCopying ? <Loading /> : discord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}