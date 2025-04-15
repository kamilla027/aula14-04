
import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login'); 
        }, 4000);

        return () => clearTimeout(timer); 
    }, [navigation]);

    return (
        <View style={styles.splashContainer}>
            <Image source={{ url: 'https://static.vecteezy.com/ti/vetor-gratis/p1/7570297-ilustracao-de-uma-unica-flor-rosa-pode-ser-usada-para-elementos-de-design-vetor.jpg' }} style={styles.splashImage} />
            <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        </View>
    );
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop:20,
    },
});

export default SplashScreen;