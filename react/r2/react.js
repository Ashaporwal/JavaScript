function customRender(reactElement, container) {
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)


const domElement= document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in reactElement.props){
    if(prop == 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        hre: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// const anotherElement = {
//     <a href="https://google.com" target='_blank'>Visit google>
//     </a.
// }

const mainConatiner = document.querySelector('#root')

customRender(reactElement, mainConatiner)