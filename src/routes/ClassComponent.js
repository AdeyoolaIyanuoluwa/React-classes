import React, { Component } from 'react'

class ClassComponent extends Component{

        constructor(props){
            super(props)
            this.state = {count: 0, firstname: "Iyanu",lastname:"Adeyoola"}
            this.increase = this.increase.bind(this)
            this.decrease = this.decrease.bind(this)
        }
        increase(){
            this.setState((currentValue)=>({
                ...currentValue,
                count: currentValue.count + 1
            }));
        }
        decrease(){
            this.state.count>0
            ?this.setState((currentValue)=>({
                ...currentValue,
                count: currentValue.count - 1,
            }))
            :alert("error")
        }

    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                <button className='btn btn-success' onClick={this.increase}>Increase</button>
                <button className='btn btn-danger ms-2' onClick={this.decrease}>Decrease</button>
            </>
        )
    }
}

export default ClassComponent