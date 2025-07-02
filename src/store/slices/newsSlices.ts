import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Article, CurrentNews } from "../../types/news.type";
import { NewsData } from "../../api/news.api";
import { getCache, setCache } from "../../utils/cacheHelper";

interface NewsState {
    newslist: Article[] | any[];
    loading: boolean,
    refreshing: boolean,
    error: string | null;
    fromCache?: boolean;
}

const initialState: NewsState = {
    newslist: [],
    loading: false,
    refreshing: false,
    error: null,
    fromCache: false,
};

export const fetchNewsList = createAsyncThunk('news/fetchNewsList', async ({ isRefresh }: { isRefresh: boolean }, { rejectWithValue }) => {
    try {
    const cachekey = 'newslist';

        if (!isRefresh) {
            const cachedData = await getCache(cachekey);
            if (cachedData) {
                return {
                    articles: cachedData as Article[],
                    fromCache: true,
                };
            }
        }
        const result = await NewsData();

        if (result.success) {
            const data = result.data as any;
            const articles = data.articles as Article[];
            await setCache(cachekey, articles);
            return {
                articles,
                fromCache: false,
            };
        } else {
            return rejectWithValue(result.error || 'Failed to fetch news lists');
        }
    } catch (error: any) {
        console.log(error);
        
        return rejectWithValue(error.message || 'Unknown error occurred');
    }
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewsList.pending, (state, action) => {
            const isRefresh = action.meta.arg?.isRefresh;
            if (isRefresh) {
                state.refreshing = true;
            } else {
                state.loading = true;
            }
            state.error = null;
        })
            .addCase(fetchNewsList.fulfilled, (state, action) => {
                state.loading = false;
                state.refreshing = false;
                state.newslist = action.payload.articles;
                state.fromCache = action.payload.fromCache;
                state.error = null;
            })
            .addCase(fetchNewsList.rejected, (state, action) => {
                state.loading = false;
                state.refreshing = false;
                state.error = action.payload as string || 'Failed to fetch news lists';
            })
    }
})
export default newsSlice.reducer;