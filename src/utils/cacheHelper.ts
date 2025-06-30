import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_PREFIX = 'api_cache_';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export const setCache = async(key: string, data: any)=>{
    const item={
        data,
        timestamp: Date.now(),
    };
    try {
        await AsyncStorage.setItem(CACHE_PREFIX+key, JSON.stringify(item));
    } catch (error) {
        console.log('Error saving to cache', error);
    }
}

export const getCache = async(key: any)=>{
    try {
        const value = await AsyncStorage.getItem(CACHE_PREFIX + key);

        if (!value) {
            return null;
        }

        const item = JSON.parse(value);

        if (Date.now() - item.timestamp > CACHE_TTL) {
            await AsyncStorage.removeItem(CACHE_PREFIX + key);
            return null;
        }
        return item.data;
    } catch (error) {
        console.log('Error reading the cache', error);
        return null
    }
}