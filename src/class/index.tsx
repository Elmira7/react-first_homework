import React, {Component} from 'react';


export class ClassComponent extends Component<any>{
    state={
        name:'светлая',
        backgroundcolor:'white'
    }
    changeState=()=>{
        this.setState({
            name: !this.state.name,
            backgroundcolor: !this.state.backgroundcolor }
        )
    }

    render(){
        return(
            <div style={{backgroundColor: this.state.backgroundcolor ? 'white' : 'red'}}>
                <p>Классовый компонент</p>
                <div>Текущий фон: {this.state.name ? 'белый' : 'красный'}</div>
                <button onClick={this.changeState}>Поменять фон</button>
            </div>
        )
    }

}

export default ClassComponent;