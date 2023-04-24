import axios from 'axios'

export const inChina = async() => {
    try {
        const { data } = await axios.get('https://ipapi.co/json/')
        return data.country_code === 'CN'
    } catch (error) {
        // error
    }
    try {
        const { data } = await axios.get('http://ip-api.com/json')
        return data.countryCode === 'CN'
    } catch (error) {
        // error
    }
    try {
        await axios.get('https://google.com/generate_204')
        return false
    } catch (error) {
        // 連不上 google.com 就是在大陸
    }
    return true
}

export const getGeoLocationFromIp = async() => {
    try {
        const { data } = await axios.get('https://ipapi.co/json/')
        return {
            country: data.country_name,
            city: data.city,
            lat: data.latitude,
            lng: data.longitude,
        }
    } catch (error) {
        // error
    }
    try {
        const { data } = await axios.get('http://ip-api.com/json')
        return {
            country: data.country,
            city: data.city,
            lat: data.lat,
            lng: data.lon,
        }
    } catch (error) {
        // error
    }
    return {
        country: '',
        city: '',
        lat: 0,
        lng: 0
    }
}
