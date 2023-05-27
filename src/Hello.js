import React, { Component } from "react";

// class Hello extends Component {
//     render() {
//         return (<div class='f1 tc'>
//             <h1>Hello</h1>
//             <h2>welcome {this.props.greeting}</h2>
//         </div>
//         )
//     }
// }

const Hello = (props) => {
    return (<div className='f1 tc'>
        <h1>Hello</h1>
        <h2>{props.greeting}</h2>
    </div>
    )
}

export default Hello;