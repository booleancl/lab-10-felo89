/**
 * @jest-environment jsdom
**/

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

// Start with a fresh page on each test
beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

test('The document comes with jest', ()=>{
  expect(document).toBeDefined()
})

test('The document HTML has the correct title', () => {
  const title = document.getElementsByTagName('title')[0].innerHTML
  expect(title).toEqual('Hello, Boolean!')
})

test('The script changes the DOM content', () => {
  const helloScript = require('../src/assets/js/app.js')
  const title = document.getElementsByTagName('H1')[0].innerHTML
  expect(title).toEqual('Hello Friend')
} )