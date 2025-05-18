import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl

    // 記錄 token
    const token = ref(null);
    // 記錄APi 回傳的 token
    const tokenCookie = useCookie('token');

    // 檢查是否登入
    const isLogin = computed(() => { !!tokenCookie.value })

    // 設定 cookie
    const setToken = (getToken) => {
        token.value = getToken;
        tokenCookie.value = token.value;
    };
    // 移除 cookie
    const clearToken = () => {
        token.value = null;
        tokenCookie.value = token.value;
    }

    // 登入
    const login = async (email, password) => {
        try {
            const response = await $fetch(`${baseUrl}api/v1/user/login`, {
                method: 'POST',
                body: {
                    email,
                    password
                },
            });
            const token = response.token;
            setToken(token);
        }
        catch (error) {
            console.error('登入失敗:', error);

        }
    }

    // 登出
    const logout = () => {
        clearToken
        console.log('登出成功');
    }

    // 取出使用者資料
    const userObject = ref(null);

    const getUserData = async () => {
        try {
            const response = await $fetch(`${baseUrl}api/v1/user/`, {
                method: 'GET',
                headers: {
                    Authorization: `${tokenCookie.value}`,
                },
            });
            userObject.value = response.result;
        } catch (error) {
            console.error('取得使用者資料失敗:', error);
        }
    };


    // 回傳 store 的資料
    return {
        token,
        isLogin,
        clearToken,
        login,
        logout,
        getUserData
    }
})