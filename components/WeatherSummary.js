import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherSummary({ temp, humidity, speed, main }) {
    return (
        <View style={styles.container}>
            <Text style={styles.summaryText}>Summary</Text>
            <Text style={styles.infoText}>Temperature: {temp} °C</Text>
            <Text style={styles.infoText}>Humidity: {humidity} %</Text>
            <Text style={styles.infoText}>Wind Speed: {speed} m/s</Text>
            <Text style={styles.infoText}>Condition: {main}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    summaryText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 18,
    },
});