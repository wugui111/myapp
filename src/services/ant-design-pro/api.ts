// @ts-ignore
/* eslint-disable */
import {api} from '@/utils/api'

// 用户登录
export async function currentUser(options?: { [key: string]: any }) {
  return api('/api/user/info', {}, 'POST', options);
}

export async function outLogin(options?: { [key: string]: any }) {
  return api('/api/user/logout', {}, 'POST', options);
}

export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return api('/api/user/login', body, 'POST', options);
}

// 客户端管理
export async function clientList(params: { current?: number; pageSize?: number }, options?: { [key: string]: any }) {
  return api('/api/client/list', params, 'POST', options);
}

export async function clientUpdate(options?: { [key: string]: any }) {
  return api('/api/client/update', options, 'POST');
}

export async function clientCreate(options?: { [key: string]: any }) {
  return api('/api/client/create', options, 'POST');
}

export async function clientDelete(options?: { [key: string]: any }) {
  return api('/api/client/delete', options, 'POST');
}
// 审批管理
export async function applyList(params: { current?: number; pageSize?: number }, options?: { [key: string]: any }) {
  return api('/api/client/apply/list', params, 'POST', options);
}

export async function applyUpdate(options?: { [key: string]: any }) {
  return api('/api/client/apply/update', options, 'POST');
}

export async function applyCreate(options?: { [key: string]: any }) {
  return api('/api/client/apply/create', options, 'POST');
}

export async function applyDelete(options?: { [key: string]: any }) {
  return api('/api/client/apply/delete', options, 'POST');
}

// 用户管理
export async function userList(params: { current?: number; pageSize?: number }, options?: { [key: string]: any }) {
  return api('/api/user/list', params, 'POST', options);
}

export async function userUpdate(options?: { [key: string]: any }) {
  return api('/api/user/update', options, 'POST');
}

export async function userCreate(options?: { [key: string]: any }) {
  return api('/api/user/signup', options, 'POST');
}

export async function userDelete(options?: { [key: string]: any }) {
  return api('/api/user/delete', options, 'POST');
}