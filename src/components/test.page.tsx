import { message } from 'antd';
import React from 'react';
const logFunc = (message: string)=>{
    console.log(message);
}
const Testpage = ({message}: any) => {
    logFunc(message);
    return (
        <div>{message}</div>
    );
}
export default Testpage;

