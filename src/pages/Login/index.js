import {Form,Button,Input,Checkbox} from 'antd'
import{UserOutlined,LockOutlined} from '@ant-design/icons'
import logo from '@/assets/logo.png'
import './index.scss'
const Item = Form.Item
const Login = () => {
    return (
        <div className='login'>
           <div className='login-container'>
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form 
                size='large'
                validateTrigger={["onChange","onBlur"]}
                autoComplete='off'>
                    <Item
                    name="mobile"
                    rules={[
                        {required:true,message:"请输入手机号"},
                        {
                            pattern:/^1{3-9}\d{9}$/,
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