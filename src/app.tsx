import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import World from './world';

const App: FC = (props: any) => {
    return <><World /></>;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);