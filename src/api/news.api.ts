import { wrapApiCall } from ".";
import { newsClient } from "./client";


export const NewsData = () =>{
   return wrapApiCall(() => newsClient.get(`top-headlines?country=us&category=business`))
}