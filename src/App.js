import './App.css';
import AppHeader from './AppHeader';
import IuItem from './IuItem';
import IuTopost from './IuToPost';
import ius from './data/ius';
import { useState } from 'react';



function App() {
    const [selectedIU, setSelectedIU] = useState(ius[null]);

    function onIuOpenClick(theIu) {
        setSelectedIU(theIu);
    }

    function onIuCloseClick (){
        setSelectedIU(null);
    }

    const iuElement = ius.map((iu, index) => {
        return <IuItem key={index} iu={iu} onIuClick = {onIuOpenClick} />;
    });

    let iutoPost = null;
    if (!!selectedIU) {
        iutoPost = <IuTopost iu={selectedIU} onBgClick = {onIuCloseClick} />

    }

    return (
        <div className="app">
            <AppHeader />
        
            <div className="app-grid">
                {iuElement}
            </div>
            {iutoPost}
        </div >



    );
}

export default App;
