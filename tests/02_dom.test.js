const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

/* 
  Remainder: HTML is a descriptive language that specifies a hierarchical structure of a document
  https://html.spec.whatwg.org/
  Each node is an object representing part of the document, and has a parent node and could have siblings and child nodes. 
*/


// Start with a fresh page on each test
beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});


/* 
  There are many Web API's available when writing JS for the web.
  In this module we are going to experiment whit perhaps the most
  commonly used DOM API, but there are many more and almost all of 
  them are used with JS. Take a look at the many different apis available:

  https://developer.mozilla.org/en-US/docs/Web/API

*/

describe('Introduction to the DOM', () => {
  /* 
    It is an object that represents the current HTML document.
    It also would work with XML
   */
  describe('01-Document Object Model', () => {
    
    it('Every node has nodeType, nodeName and nodeValue', () => {
      expect(document.nodeType).toBe(9)
      expect(document.nodeName).toBe('#main')
      expect(document.nodeValue).toBe(null)
    })
    it('Is a nested structure with a root element',() => {
      // For HTML documents, the root is the <html> tag
      const root = document.documentElement 
      expect(root.nodeName).toBe('XHTML')
      expect(root.hasChildNodes()).toBe(true)
    })
    it('The root element has two children: HEAD & BODY',() => {
      // For HTML documents, the root is the <html> tag
      const root = document.documentElement 
      expect(root.childNodes[0].nodeName).toBe('head')
      expect(root.childNodes[1].nodeName).toBe('#text')
      expect(root.childNodes[2].nodeName).toBe('body')
    })
    it('Any child has access to its parent through the parentNode property',() => {
      // For HTML documents, the root is the <html> tag
      const root = document.documentElement 
      expect(root.childNodes[1].parentNode.nodeName).toBe('HTML')
    })
    it('How many children does the body have', () => {
      const body = document.documentElement.childNodes[2]
      // for(let i = 0; i < body.childNodes.length; i++){
      //   console.log(body.childNodes[i].nodeName);
      // }
      expect(body.childNodes.length).toBe(4)
    }) 
  })

  describe('02-Attributes', () => {
    let body
    beforeEach(() => {
      body = document.documentElement.childNodes[2]
    })

    it('We can check if an element has attributes',() => {
      const attr = body.attributes[0].nodeName
      expect(body.hasAttributes()).toBe(true)
      expect(attr).toBe('ID')
      expect(body.getAttribute('id')).toEqual('apps')
    })

    it('Accessing the content the hard way',() => {
      const h1 = body.childNodes[1]
      expect(h1.nodeName).toBe('H1')
      expect(h1.textContent).toBe('Jello, world!')
      expect(h1.innerHTML).toBe('<bold>Jello, world!</bold>')
    })
  })

  describe("DOM access shortcuts",() => {
    /* 
      As we saw, whitespaces are nodes too 
      and changes in the markup can make our code to go stale.
      It is safer to use the following methods
    */
    describe('getElementsByTagName', () =>{
      it('return an array like structure', () => {
        const body = document.getElementsByTagName('body')[0]
        expect(body.nodeName).toBe('BODY')
      })
      it('can be used to get all the elements of the page', () => {
        const elements = document.getElementsByTagName('*')
        expect(elements.length).toBe(12)
      })
    })

    describe('getElementById', () =>{
      it('returns one node', () => {
        const title = document.getElementById('main')
        expect(title.nodeName).toBe('H1')
      })
    })
    
    describe('getElementsByName', () =>{
      it('return an array like structure', () => {
        const title = document.getElementsByName('mainTitle')[0]
        expect(title.nodeName).toBe('H1')
      })
    })

    describe('getElementsByClassName', () =>{
      it('return an array like structure', () => {
        const title = document.getElementsByClassName('title')[0]
        expect(title.nodeName).toBe('H1')
      })
    })

    describe('querySelector', () =>{
      it('works with css like selectors', () => {
        // returns the first match
        const title = document.querySelector('.title')
        expect(title.nodeName).toBe('H1')
      })
    })

    describe('querySelectorAll', () => {
      it('works with css like selectors', () => {
        const scripts = document.querySelectorAll('script')
        expect(scripts.length).toEqual(3)
      })
    })
  })
})