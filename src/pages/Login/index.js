import {Form,Button,Input,Checkbox,message} from 'antd'
import{UserOutlined,LockOutlined} from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import {login} from '@/store/actions/user'
import logo from '@/assets/logo.png'
import './index.scss'
import { useDispatch } from 'react-redux'
const Item = Form.Item
const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const onFinish = async values => {
        const {mobile,code}  = values
        try{
            await dispatch(login(mobile,code))
            history.replace('/home')
        }catch(e){
            message.error(e.response?.data?.message||"登录失败")
        }
    }
    return (
        <div className='login'>
           <div className='login-container'>
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form 
                size='large'
                validateTrigger={["onChange","onBlur"]}
                onFinish = {onFinish}
                initialValues = {{
                    mobile:'13911111111',
                    code:'246810',
                    isAgree:true
                }}
                autoComplete='off'>
                    <Item
                    name="mobile"
                    rules={[
                        {required:true,message:"请输入手机号"},
                        {
                            pattern:/^1[3-9]\d{9}$/,
                            message:'手机号格式不正确'
                        }
                    ]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="请输入手机号码" />
                    </Item>
                    <Item
                    name="code"
                    rules={[
                        {require:true,message:'请输入验证码'},
                        {
                            len:6,
                            message:'请输入6位数验证码'
                        }
                    ]}
                    >
                    <Input prefix={<LockOutlined/>} placeholder="请输入验证码" />
                    </Item>
                    <Item
                    name="isAgree"
                    valuePropName='checked'
                    rules={[
                        {
                            validator:(_,value) =>{
                                if(value===true) return Promise.resolve();
                                else return Promise.reject(new Error('请勾选我已阅读并同意'))
                            }
                        }
                    ]}
                    >
                        <Checkbox>我已阅读并同意「用户协议」和「隐私条款</Checkbox>
                    </Item>
                    <Item >
                        <Button type='primary' htmlType='submit' block>登录</Button>
                    </Item>
                </Form>
           </div>
        </div>
    )
}

export default Login