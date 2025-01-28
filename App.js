import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const API_KEY = "07128f2330b27a9d253c7ab574067700";


export default function App() {

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        try {
          const response = await fetch(API);
          if (response.status === 200) {
              const data = await response.json();
              setWeatherData(data);
          } else {
              setWeatherData(null);
              alert("City not found! Please try again.");
          }
      } catch (error) {
          console.log(error);
          alert("An error occurred while fetching the weather data.");
      } finally {
          setLoaded(true);
      }
  }

    useEffect(() => {
        fetchWeatherData('Pasuruan');
    }, [])
    

    if(!loaded) {
        return (
            <View style={styles.container}>
               <ActivityIndicator color='gray' size={hp('5%')} />
            </View>

        )
    }

    else if(weatherData === null) {
        return (
            <View style={styles.container}>
                <SearchBar fetchWeatherData={fetchWeatherData}/>
                <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}  />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {

      margin: hp('2%'), // Use hp for margin
      fontSize: 28
  }
});