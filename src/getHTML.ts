// const puppeteer = require('puppeteer');

import puppeteer from 'puppeteer'

export const getWholeDom = async (url:string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {waitUntil: 'networkidle2'});
  let bodyHTML = await page.content();

  await browser.close();

  return bodyHTML
};
