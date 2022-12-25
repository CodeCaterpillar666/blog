"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6045],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"rendering-lists",title:"Rendering Lists",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},l=void 0,p={permalink:"/blog/rendering-lists",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-13-rendering-lists/index.md",source:"@site/blog/2022-07-13-rendering-lists/index.md",title:"Rendering Lists",description:"This is my personal notes on React Docs(Beta) - Conditional Rendering. If interested, check whole series here.",date:"2022-07-13T00:00:00.000Z",formattedDate:"July 13, 2022",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React Docs(Beta) Personal Notes",permalink:"/blog/tags/react-docs-beta-personal-notes"}],readingTime:3.525,truncated:!1,authors:[{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"}],frontMatter:{slug:"rendering-lists",title:"Rendering Lists",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},prevItem:{title:"Passing Props to a Component",permalink:"/blog/passing-props-to-a-component"},nextItem:{title:"Keeping Components Pure",permalink:"/blog/keeping-components-pure"}},u={authorsImageUrls:[void 0]},c=[{value:"Rendering data from arrays",id:"rendering-data-from-arrays",level:2},{value:"Filtering arrays of items",id:"filtering-arrays-of-items",level:2},{value:"Keeping list items in order with <code>key</code>",id:"keeping-list-items-in-order-with-key",level:2},{value:"Rules of keys",id:"rules-of-keys",level:3},{value:"Why does React need keys?",id:"why-does-react-need-keys",level:3},{value:"Recap",id:"recap",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is my personal notes on React Docs(Beta) - ",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/conditional-rendering"},"Conditional Rendering"),". If interested, check whole series ",(0,o.kt)("a",{parentName:"p",href:"https://zwwang98.github.io/blog/react-docs-beta-notes"},"here"),"."),(0,o.kt)("p",null,"This doc introduces how to render lists."),(0,o.kt)("p",null,"Rendering data from arrays is common.\nYou will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images.\nIn these situations, you can store that data in JavaScript objects and arrays and use methods like map() and filter() to render lists of components from them."),(0,o.kt)("p",null,"Briefly speaking, there are two major points in this ",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/rendering-lists"},"doc"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We could use ",(0,o.kt)("inlineCode",{parentName:"li"},"map()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"filter()")," function to convert a JavaScript array into an array of React components"),(0,o.kt)("li",{parentName:"ul"},"When rendering lists, we should pay attention to ",(0,o.kt)("inlineCode",{parentName:"li"},"key"))),(0,o.kt)("h2",{id:"rendering-data-from-arrays"},"Rendering data from arrays"),(0,o.kt)("p",null,"Here\u2019s a short example of how to generate a list of items from an array:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move the data into an array:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const people = [\n  'Creola Katherine Johnson: mathematician',\n  'Mario Jos\xe9 Molina-Pasquel Henr\xedquez: chemist',\n  'Mohammad Abdus Salam: physicist',\n  'Percy Lavon Julian: chemist',\n  'Subrahmanyan Chandrasekhar: astrophysicist'\n];\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Map the people members into a new array of JSX nodes, listItems:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const listItems = people.map(person => <li>{person}</li>);\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Return listItems from your component wrapped in a ",(0,o.kt)("inlineCode",{parentName:"li"},"<ul>"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"return <ul>{listItems}</ul>;\n")),(0,o.kt)("p",null,"Here is the result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const people = [\n  'Creola Katherine Johnson: mathematician',\n  'Mario Jos\xe9 Molina-Pasquel Henr\xedquez: chemist',\n  'Mohammad Abdus Salam: physicist',\n  'Percy Lavon Julian: chemist',\n  'Subrahmanyan Chandrasekhar: astrophysicist'\n];\n\nexport default function List() {\n  const listItems = people.map(person =>\n    <li>{person}</li>\n  );\n  return <ul>{listItems}</ul>;\n}\n")),(0,o.kt)("h2",{id:"filtering-arrays-of-items"},"Filtering arrays of items"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"filter()")," method takes an array of items, passes them through a \u201ctest\u201d (a function that returns true or false), and returns a new array of only those items that passed the test (returned true)."),(0,o.kt)("p",null,"The code below filter people who are chemists and display their information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { people } from './data.js';\nimport { getImageUrl } from './utils.js';\n\nexport default function List() {\n  const chemists = people.filter(person =>\n    person.profession === 'chemist'\n  );\n  const listItems = chemists.map(person =>\n    <li>\n      <img\n        src={getImageUrl(person)}\n        alt={person.name}\n      />\n      <p>\n        <b>{person.name}:</b>\n        {' ' + person.profession + ' '}\n        known for {person.accomplishment}\n      </p>\n    </li>\n  );\n  return <ul>{listItems}</ul>;\n}\n")),(0,o.kt)("h2",{id:"keeping-list-items-in-order-with-key"},"Keeping list items in order with ",(0,o.kt)("inlineCode",{parentName:"h2"},"key")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to give each array item a key \u2014 a string or a number that uniquely identifies it among other items in that array."),(0,o.kt)("li",{parentName:"ul"},"Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree."),(0,o.kt)("li",{parentName:"ul"},"Rather than generating keys on the fly, you should include them in your data.")),(0,o.kt)("h3",{id:"rules-of-keys"},"Rules of keys"),(0,o.kt)("p",null,"Keys must be unique among siblings. However, it\u2019s okay to use the same keys for JSX nodes in different arrays.\nKeys must not change or that defeats their purpose! Don\u2019t generate them while rendering."),(0,o.kt)("h3",{id:"why-does-react-need-keys"},"Why does React need keys?"),(0,o.kt)("p",null,"Imagine that files on your desktop didn\u2019t have names. Instead, you\u2019d refer to them by their order \u2014 the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on."),(0,o.kt)("p",null,"File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime."),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("p",null,"On this page I learned:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to move data out of components and into data structures like arrays and objects."),(0,o.kt)("li",{parentName:"ul"},"How to generate sets of similar components with JavaScript\u2019s ",(0,o.kt)("inlineCode",{parentName:"li"},"map()"),"."),(0,o.kt)("li",{parentName:"ul"},"How to create arrays of filtered items with JavaScript\u2019s ",(0,o.kt)("inlineCode",{parentName:"li"},"filter()"),"."),(0,o.kt)("li",{parentName:"ul"},"Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.")))}d.isMDXComponent=!0}}]);