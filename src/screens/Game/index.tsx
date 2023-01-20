import {
    useEffect,
    useState
} from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Text
} from 'react-native';

import logoImage from "../../assets/logo.png"

import { Entypo } from "@expo/vector-icons"

import {
    useRoute,
    useNavigation
} from '@react-navigation/native';

import { GameParams } from '../../@types/navigation';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Heading } from "../../components/Heading"
import { DuoCard } from "../../components/DuoCard"
import { DuoMatch } from "../../components/DuoMatch"

import { THEME } from '../../theme';
import { DuoCardProps } from '../../@types/global';

export function Game() {
    const [ads, setAds] = useState<DuoCardProps[]>([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [discord, setDiscord] = useState("")

    const route = useRoute();
    const game = route.params as GameParams;

    const navigation = useNavigation();

    function handleBackToHome() {
        navigation.navigate("home")
    };

    async function getDiscord(adId: string) {
        await fetch(`http://192.168.0.102:3333/ads/${adId}/discord`)
            .then((response) => response.json())
            .then(data => setDiscord(data.discord))
    }

    useEffect(() => {
        fetch(`http://192.168.0.102:3333/games/${game.id}/ads`)
            .then((response) => response.json())
            .then(data => setAds(data))
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleBackToHome}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={25}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImage}
                        style={styles.logoImage}
                    />

                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.gameBanner}
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />

                <FlatList
                    data={ads}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <DuoCard
                            key={item.id}
                            ad={item}
                            onConnect={() => {
                                getDiscord(item.id);
                                setModalIsOpen(true);
                            }}
                        />
                    )}
                    keyExtractor={item => item.id}
                    style={styles.containerList}
                    contentContainerStyle={[ads.length > 0 ? styles.contentList : styles.emptyListContent]}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Não há anúncios publicados ainda.
                        </Text>
                    )}
                />

                <DuoMatch
                    visible={modalIsOpen && discord?.length > 0}
                    onClose={() => {
                        setDiscord("");
                        setModalIsOpen(false);
                    }}
                    discord={discord}
                />
            </SafeAreaView>
        </Background>
    );
}