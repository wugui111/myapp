
import { request } from '@umijs/max';
import Cookies from 'react-cookies'


export async function api(url: string, data: any, method: string = 'POST', options?: { [key: string]: any }) {
    // 从cookie中获取token
    const accessToken = Cookies.load('accessToken');
    
    const response = await request(url, {
      method,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        ...(options?.headers || {}),
      },
      data,
      ...(options || {}),
    });
  
    // 处理后端返回的数据格式
    if (response.code !== 20000) {
      throw new Error(response.msg || '请求失败');
    }
  
    return response.data;
  }