import axios from 'axios'

export enum MethodHttp {
  post = 'POST',
  get = 'GET',
  put = 'PUT',
  delete = 'DELETE',
}

export interface InvokeOptions {
  header?: any
  pathParams?: any
  reqPathParam?: any
  shouldHandleError?: boolean
  // errorCallBack: any;
  showLoader?: boolean
  noExpSessionHandle?: boolean
  file?: any
  textPlain?: boolean
}

interface IEndPoint {
  url: string
  method: string
  useMock?: boolean
  baseUrl?: string
  loading?: boolean
}

// Global axios instance
// axios.create({
//     proxy: {
//         host: 'http://localhost',
//         port: 3000,
//     },
// });

export const invokeWS = (
  endpoint: IEndPoint,
  requestData?: any,
  options?: InvokeOptions,
) => {
  const invokeOptions = formatOptions(options || {})

  // For real call WS
  return callWS(endpoint, requestData, invokeOptions)
}

const callWS = (
  endpoint: IEndPoint,
  requestData: any,
  invokeOptions?: InvokeOptions,
) => {
  return new Promise((resolve, reject) => {
    if (endpoint?.loading) {
      document.body.classList.add('loading-indicator')
    }

    const invokeParams = buildRequest(
      endpoint,
      requestData,
      invokeOptions || {},
    )

    if (invokeOptions?.textPlain) {
      axios.defaults.headers.post = { 'Content-Type': 'text/plain' }
    }

    axios.request(invokeParams).then(
      (response: any) => {
        document.body.classList.remove('loading-indicator')

        showNotification(true, response)
        resolve(response)
      },
      (error: any) => {
        document.body.classList.remove('loading-indicator')

        showNotification(false, error)
        reject(error)
      },
    )
  })
}

const buildRequest = (
  endpoint: any,
  requestData: any,
  options: InvokeOptions,
) => {
  return {
    method: endpoint.method,
    baseUrl: endpoint.baseUrl,
    url: endpoint.url + formatPathParams(options),
    data:
      !endpoint.method || endpoint.method !== 'GET' ? requestData : undefined,
    headers: getHeaders(),
  }
}

const formatOptions = (options: InvokeOptions): InvokeOptions => {
  return {
    header: options.header || null,
    pathParams: options.pathParams || null,
    reqPathParam: options.reqPathParam || null,
    shouldHandleError: options.shouldHandleError || true,
    showLoader: options.showLoader || false,
    noExpSessionHandle: options.noExpSessionHandle || false,
    file: options.file || null,
    textPlain: options.textPlain || false,
  }
}

const formatPathParams = (options: InvokeOptions): string => {
  // url = url/{reqPathParam}
  // if (path(['reqPathParam'], options)) {
  //     return `/${options.reqPathParam}`;
  // }
  // // url = url?key1=pathParams[1]&key2=pathParams[2]...
  // if (path(['pathParams'], options)) {
  //     const { pathParams } = options;
  //     let url = '?';
  //     const keys = Object.keys(pathParams);
  //     keys.forEach((key, index) => {
  //         url += `${key}=${pathParams[key]}`;
  //         if (index !== keys.length - 1) {
  //             url += '&';
  //         }
  //     });
  //     return url;
  // }
  return ''
}

const getHeaders = () => {
  const headers: any = {}
  // if (this.getAuthToken()) {
  //     headers.Authorization = this.getAuthToken();
  // }
  return headers
}

const showNotification = (success: boolean, result: any) => {
  // Sho notification here

  console.log('success result ', success, result)
}
