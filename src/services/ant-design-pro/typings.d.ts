// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id?: string;
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
    role?: string;
  };

  
  type LoginResult = {
    data: any;
    token?: string;
    status?: string;
    type?: string;
    currentAuthority?: string;
    remember_token?: string;
    msg?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;

  };
  type clientListItem = {
    id?: number;
    name?: string;
    secret?: string;
    redirect?: string;
    personal_access_client?: boolean;
    password_client?: boolean;
    revoked?: boolean;
    created_at?: string;
    updated_at?: string;
    meta?: {
      company?: string;
      manager?: string;
      managerPhone?: string;
      title?: string;
      icon?: string;
      hideInMenu?: boolean;
      access?: string;
      roles?: string[];
    };
  };
  type applyListItem = {
    id?: number;
    name?: string;
    secret?: string;
    redirect?: string;
    personal_access_client?: boolean;
    password_client?: boolean;
    revoked?: boolean;
    created_at?: string;
    updated_at?: string;
    checked?: number;
    notes?: string;
    meta?: {
      company?: string;
      manager?: string;
      managerPhone?: string;
      title?: string;
      icon?: string;
      hideInMenu?: boolean;
      access?: string;
      roles?: string[];
    };
  };

  type RuleList = {
    data?: RuleListItem[];
    data?: clientListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    email?: string;
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
    token?: string;
    number?: number;
    verifyCode?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
