import './App.css';
import AppHeader from './AppHeader';
import IuItem from './IuItem';
import IuTopost from './IuToPost';
import ius from './data/ius';
import { useState } from 'react';
import AppSearch from './AppSeacrh';



function App() {
    const [selectedIU, setSelectedIU] = useState(ius[null]);
    const [searchText, setSearchText] = useState('');

    function onIuOpenClick(theIu) {
        setSelectedIU(theIu);
    }

    function onIuCloseClick() {
        setSelectedIU(null);
    }

    const iuElement = ius.filter((iu) => {
        return iu.tittle.includes(searchText);
    }).map((iu, index) => {
        return <IuItem key={index} iu={iu} onIuClick={onIuOpenClick} />;
    });

    let iutoPost = null;
    if (!!selectedIU) {
        iutoPost = <IuTopost iu={selectedIU} onBgClick={onIuCloseClick} />

    }

    return (
        <div className="app">
            <AppHeader />
            <section className ="app-section">
                <div className = "app-container">
                <AppSearch value={searchText} onValueChange={setSearchText} />
            <div className="app-grid">
                {iuElement}
                </div>
            </div>
            </section>
            {iutoPost}
        </div >



    );
}

export default App;
