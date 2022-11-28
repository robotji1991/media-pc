import ReactDOM from 'react-dom'
import '@/index.scss'
// index.scss 在App之前导入，App组件样式优先级要高，可能要覆盖样式
import App from '@/App'


ReactDOM.render(
      <App />,
  document.getElementById('root')
)