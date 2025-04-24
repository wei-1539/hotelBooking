// 引入 vee-validate 最重要的內容
//defineRule 是用來定義規則的
// configure 是用來設定全域的規
import { defineRule, configure } from 'vee-validate'
// 從 vee-validate/rules 引入常用的規則 ：required（必填）
import { required, email, min, max } from '@vee-validate/rules'
// 引入 i18n 國際語系 localize(使用哪種語系) 和 setLocale（設定預設語系）
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 i18n 的繁體中文語系
import  zhTW  from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 註冊註冊常用的規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('phone', (value) => {
    // 驗證電話號碼格式,使用正規表達式
    const phoneRegex = /^09\d{8}$/
    return phoneRegex.test(value) || '電話號碼格式錯誤'
})

// 設定全域的錯誤訊息 ＆ 預設語系
export default defineNuxtPlugin((nuxtApp)=>{
    configure({
        // 錯誤訊息本地化為繁體中文，並載入 zh_TW 對應的錯誤訊息模板。
        generateMessage: localize({
            zh_TW:zhTW,
        }),
        // 當使用者輸入時即觸發驗證
        validateOnInput: true,
    })
    // 設定預設語系
    setLocale('zh_TW')

})