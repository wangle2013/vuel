import request from '@/utils/request';
interface loginParams{
  username:string,
  password:string
}
export const login = (data: loginParams) => {
    return request({
        url: '/login',
        method: 'post',
        data 
    });
};
export const getGoodsList = () => {
    return request({
        url: '/getGoodsList',
        method: 'get'
    });
};

export const getRoleList = () => {
  return request({
      url: '/getRoleList',
      method: 'get'
  });
};
export const getUserList = () => {
return request({
    url: '/getUserList',
    method: 'get'
});
};