import { useEffect } from "react";

const Count = (props) => {

    useEffect(() => {

        return () => {
            console.log('dele');
        };
    },[]);

    return (
        <div>
            Current count {props.count}.
            <div>
                <button onClick={props.handleClick}>Increment Count!</button>
            </div>
        </div>
    );
}

export default Count;