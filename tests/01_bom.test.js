/**
  We have set up the jest environment to work as if it is working inside a Browser, not node.js. 
  See package.json "jest" property 

  More info:
  https://github.com/jsdom/jsdom
  https://jestjs.io/docs/configuration#testenvironment-string
**/

describe('The Browser object model', () => {

  it('01-Has methods to interact with the window object', () => {
    // We are working with the jest dom implementation
    expect(browser).toBeDefined()
  })

  it('02-Is where operators live in the browser too',() => {
    const result = parseInt('4')
    expect(window.parseInt('2') + 2 ).toEqual(3)
  })

  it('03-Is the global object', () => {
    globalVariable = 'Surprise'
    expect(globalVariable).toEqual(globalVariable)
  })

  it('04-Has a navigator property', () => {
    expect(window.navigator.userAgent).toMatch('Chrome')
  })

  it('05-Has a location property', () => {
    /* 
     Try these examples in a real console. 
     jsdom does not implement navigation. 
    */
    // const site = "https://boolean.cl"
    // window.location.href = site
    // location.href = site
    // location = site
    // location.assign(site)
    // location.replace(site)
    expect(window.location.hostname).toEqual("localjost") 
    expect(window.location.href).toEqual("http://localjost/") 
  })

  it('06-Has a history property', () => {
    window.history.back()
    window.history.forward()
    history.pushState({a: 1}, "", "hello");
    history.pushState({b: 2}, "", "hello-you-too");
    expect(history.state).toEqual({b: 2})
    expect(window.history.length).toBe(3)
  })

  it('07-Has a document property',() => {
    expect(window.document).toBeDefined()
  })
})