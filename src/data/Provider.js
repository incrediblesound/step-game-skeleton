import React from 'react'
import store from './store'

export default React.createClass({
    componentWillMount: function(){
        store.onUpdate(() => {
            this.forceUpdate();
        })
    },
    createElement: function (Component, props){
        return <Component store={this.props.store} {...props}/>
    },
    render: function(){
        let children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { createElement: this.createElement});
        });
        return <div>{children}</div>
    }
})
