function customRender(reactElement, container){
    //The given techniques does not work in the element having single or more than two attribute
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    //Making this function modular to handle one or more than two attribute at the same time
    const docElement = document.createElement(reactElement.type)
    docElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        docElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(docElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)