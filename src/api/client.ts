import { create } from "apisauce";
import { Config } from "../config";


export const weatherClient = create({
    baseURL: Config.weatherURL,
    params:{
        appid: Config.weatherApiKey
    },
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
})

export const newsClient = create({
    baseURL: Config.newsURL,
    params:{
        apiKey: Config.newsApiKey
    },
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
})
