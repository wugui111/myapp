import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '江汉大学授权中心',
  pwa: true,
  logo: 'https://ts1.cn.mm.bing.net/th/id/R-C.ad84cd2a4982f39d22564ed2eac422fb?rik=YjRY9HbDh8QMwA&riu=http%3a%2f%2fimg.gaokaoq.com%2fcollege2%2f5948cc5a32932.jpg&ehk=sjbtenOWIuG8WVJmskvY5UihtiY9L2ucC2G%2fwDEUdAU%3d&risl=&pid=ImgRaw&r=0',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
