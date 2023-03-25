import Tcard from './components/Tcard';
import Tnav from './components/Tnav';
import tdata from './tdata';
import './index.css';

function Travel(){
    
    //Variable to fetch data from the files
    const cards = tdata.map(x => {
        return(<Tcard
        key={x.id}
        item={x}
        />)
    })
    
    
    return(
        <div className='container'>
            <Tnav/>
            <div>
                {cards}
            </div>
        </div>
    )
}

export default Travel;