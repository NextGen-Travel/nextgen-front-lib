import axios from 'axios'
import { Cache, calc } from 'power-helper'

type Location = {
    countryCode: string
    lat: number
    lng: number
}

const cache = new Cache<string, Location>({
    key: () => 'cache',
    keepAlive: calc.toMs('h', 1),
    pick: async() => {
        try {
            const { data } = await axios.get('https://ipapi.co/json/')
            return {
                countryCode: data.country_code,
                lat: data.latitude,
                lng: data.longitude
            }
        } catch (error) {
            // error
        }
        try {
            const { data } = await axios.get('http://ip-api.com/json')
            return {
                countryCode: data.country,
                lat: data.lat,
                lng: data.lon,
            }
        } catch (error) {
            // error
        }
        return {
            countryCode: '',
            lat: 0,
            lng: 0
        }
    }
})

export const inChina = async() => {
    try {
        const result = await cache.get('')
        return result.countryCode === 'CN'
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

export const getGeoLocation = async() => {
    const data = await cache.get('')
    return {
        countryCode: data.countryCode,
        lat: data.lat,
        lng: data.lng
    }
}
