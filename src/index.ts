import { getMyIpaddress } from './mpip'
import { getWholeDom } from './getHTML'

console.log('Hello world!')

const run = async() => {
  // var ip = await getMyIpaddress();
  // console.log(ip);

  var dom = await getWholeDom('https://developers.google.com/web/');
  console.log(dom)
}

run()
