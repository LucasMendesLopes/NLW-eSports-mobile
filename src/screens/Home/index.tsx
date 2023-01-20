import {
    useEffect,
    useState
} from 'react';
import {
    SafeAreaView,
    Image,
    FlatList
} from 'react-native';
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles"

import logoImage from "../../assets/logo.png"

import { Heading } from "../../components/Heading"
import { GameCard, GameCardProps } from "../../components/GameCard"
import { Background } from '../../components/Background';

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([]);

    useEffect(() => {
        fetch('http://192.168.0.102:3333/games')
            .then((response) => response.json())
            .then(data => setGames(data))
    }, [])

    const navigation = useNavigation();

    function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
        navigation.navigate("game", { id, title, bannerUrl })
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImage}
                    style={styles.logoImage}
                />

                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList
                    data={games}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.contentList}
                    style={styles.containerList}
                />
            </SafeAreaView>
        </Background>
    );
}