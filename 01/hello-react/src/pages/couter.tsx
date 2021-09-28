import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import internal from 'stream';
interface Props extends RouteComponentProps{};
interface ICounter{
    value: number,
    increase:number
}
const Couter : React.FunctionComponent<Props> = ({history}: Props) =>{
    const [count, setCount] = React.useState<ICounter | null>(null);
    function tick(){
        debugger;
        setCount((prev) => ({
            value: (!!prev ? prev!.value : 0) + (!!prev ? prev.increase : 1),
            increase: (!!prev ? prev?.increase : 1)
        }));
    }
    function StartCount(){
        const timer = setInterval(()=>{
            tick();
        },1000);
    }
    function ChangeIncrease(){
        setCount((prev) => ({
            value: (!!prev ? prev?.value : 0) ,
            increase: (!!prev ? prev?.increase : 0) + 1
        }));
    }
    // React.useEffect(() => {
    //     const timer = window.setInterval(() => {
    //         setCount((prev) => ({
    //             value: (!!prev ? prev?.value : 0) + (!!prev ? prev.increase : 1),
    //             increase: (!!prev ? prev?.increase : 1)
    //         }));
    //     }, 1000);
    //     return () => {
    //       window.clearInterval(timer);
    //     };
    //   }, []);
    return(
        <div>
            <h1>Learn using hook in React</h1>
            <div>
                <span>Counter:</span><span>{count?.value}</span>
            </div>
            <button type="button" onClick={()=>StartCount()}>Start Count</button>
            <button type="button" onClick={()=>ChangeIncrease()}>Change Increase</button>
            <hr/>
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
export default Couter;