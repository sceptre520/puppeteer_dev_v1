const puppeteer = require('puppeteer');
const Xvfb = require('xvfb');

export const getMyIpaddress = async () => {
  const url = "https://www.whatismyip.com/";
  
  var xvfb = new Xvfb({
    silent: true,
    xvfb_args: ["-screen", "0", '1280x720x24', "-ac"],
  });
  xvfb.start((err:any)=>{if (err) console.error(err)});

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--no-sandbox', '--start-fullscreen', '--display='+xvfb._display]
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url, {waitUntil: 'networkidle2'});

  const spanObj = await page.$("span#ipv4");
  const ipAddress = await (await spanObj.getProperty('textContent')).jsonValue();

  xvfb.stop();

  return ipAddress
};
