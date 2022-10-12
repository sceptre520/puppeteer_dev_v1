import { getMyIpaddress } from './mpip'

console.log('Hello world!')

const run = async() => {
  var ip = await getMyIpaddress();
  console.log(ip);
}

run()
