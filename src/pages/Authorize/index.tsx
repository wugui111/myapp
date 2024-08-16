import { useLocation, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { history } from '@umijs/max';
import { useModel } from '@umijs/max';
import { stringify } from 'querystring';
import {Button} from 'antd';

const SomePage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const location = useLocation();

  useEffect(() => {
    if (!initialState?.currentUser) {
      const { search, pathname } = window.location;
      if (window.location.pathname !== '/user/login') {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: pathname + search,
          }),
        });
      }
    } else{

        const userId=initialState?.currentUser.id
        const targetUrl = `http://localhost:8080/oauth/authorize${location.search}&id=${userId}`;

        console.log(targetUrl);
        // 跳转到目标 URL
        window.location.href = targetUrl;
    }
  }, [initialState, location]);

//   const handleAuthorize = () => {
//     const targetUrl = `http://localhost:8080/oauth/authorize?${location.search}`;
//     console.log(targetUrl);
//     window.location.href = targetUrl;
//   };

//   const handleCancel = () => {
//     // 处理取消授权的逻辑，例如跳转到其他页面或显示提示信息
//     console.log('取消授权');
//     history.push('/'); // 跳转到首页或其他页面
//   };

  return (
    <div>
      {/* <h1>是否同意授权？</h1>
        <Button onClick={handleAuthorize}>同意授权</Button>
        <Button onClick={handleCancel}>取消授权</Button> */}
    </div>
  );
};

export default SomePage;
