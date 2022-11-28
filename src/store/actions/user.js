import { setToken,http } from "@/utils"

export const login  = (mobile,code) =>{
    return async dispatch =>{
        // const res = await axios.post('http://geek.itheima.net/v1_0/authorizations',{
        const data = await http.post('/authorizations',{
            mobile,
            code
        })

        //此处获取的是token
        //const {token} = res.data.data
        //localStorage.setItem('media-pc',token)
        setToken(data.token)
        dispatch({type:'login/setToken',payload:data.token})
    }
}