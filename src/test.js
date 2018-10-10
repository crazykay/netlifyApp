import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'

export default class App {
  constructor() {
    this.authorization = null
  }
  generationAuthorization(auth_key) {
    const wordArray = Utf8.parse(auth_key + ':')
    const authorization = `Basic ${Base64.stringify(wordArray)}`
    // 解密
    // console.log(Base64.parse(authorization.substr(6)).toString(Utf8))
    this.authorization = authorization
    return authorization
  }
  unixDateFormate(timestamp) {
    let d = new Date(timestamp * 1000)
    return d.toLocaleString('zh-CN').replace(/\//g, '-').replace(/\b\d\b/g, '0$&')
  }
}

window.App = App