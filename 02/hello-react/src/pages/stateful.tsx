import { debug, time } from 'console';
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps{};
type ClockState ={
    time: Date,
    timerId: any
}
export class Statefull extends React.Component<Props, ClockState>{
    state: ClockState = {
        time: new Date(),
        timerId: null
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    
    shouldComponentUpdate(nextProps: {}, nextState: ClockState, nextContext: {}){
        return true;
    }
    
    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.state.timerId);
        debugger;
    }
    tick(){
        this.setState({
            time: new Date()
        });
    }
    StartTime(){
        let timerId = setInterval(()=>{
            this.tick()
        },1000);
        this.setState({timerId:timerId});
    }
    render(){
        const {history} = this.props;
        return(
            <div>
                <h1>This is Stateful component</h1>
                <button type="button" onClick={()=>{this.StartTime()}} name="Start">Start Clock</button>
                <div>{this.state.time?.toLocaleTimeString()}</div>
                <a onClick={history.goBack} href="void:;">Previous Page</a>
                <div>
                    <Link to="/">Home Page</Link>
                </div>
                <div>
                    <Link to="/stateful">Stateful</Link>
                </div>
                <div>
                    <Link to="/stateless">Stateless</Link>
                </div>
                <div>
                    <Link to="/hooks">Hooks</Link>
                </div>
            </div>
        )
    }
}
export default Statefull;