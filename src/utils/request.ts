import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { showNotify, showLoadingToast, closeToast, showSuccessToast } from "vant"
type Result<T> = {
  code: number;
  message: string;
  data: T;
};
class Request {
  //拿到axios实例
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig<{
    baseURL: string;
    timeout: number
  }> = {
      baseURL: import.meta.env.VITE_PUBLIC_PATH,
      timeout: 60000,
    };
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config));
    this.instance.interceptors.request.use((config: any) => {
      showLoadingToast({
        message: '加载中',
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
      });
      return config
    }, (error: any) => {
      return Promise.reject(error);
    });
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      // 直接返回res，具体的相应逻辑在里面写
      closeToast()
      showSuccessToast('交易成功');
      return res
    }, (error: any) => {
      let message = "";
      switch (error.response.status) {
        case 400:
          message = "请求错误(400)";
          break;
        case 401:
          message = "未授权，请重新登录(401)";
          // 这里可以做清空storage并跳转到登录页的操作
          break;
        case 403:
          message = "拒绝访问(403)";
          break;
        case 404:
          message = "请求出错(404)";
          break;
        case 408:
          message = "请求超时(408)";
          break;
        case 500:
          message = "服务器错误(500)";
          break;
        case 501:
          message = "服务未实现(501)";
          break;
        case 502:
          message = "网络错误(502)";
          break;
        case 503:
          message = "服务不可用(503)";
          break;
        case 504:
          message = "网络超时(504)";
          break;
        case 505:
          message = "HTTP版本不受支持(505)";
          break;
        default:
          message = `连接出错(${error.response.status})!`;
      }
      showNotify({ type: 'danger', message, });
      closeToast()
      return Promise.reject(error.response);
    })
  }
  /**
   * 定义git请求
   * @param url 请求地址
   * @param config 配置参数
   * @returns 
   */
  public get<T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, { params, ...config });
  }
  /**
* 定义post请求
* @param url 请求地址
* @param config  请求参数
* @returns 
*/
  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config);
  }
  /**
  * 定义put请求
  * @param url 请求地址
  * @param config  请求参数
  * @returns 
  */
  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config);
  }
}

let request_: Request = new Request({});
export default request_


