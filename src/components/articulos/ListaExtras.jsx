import React,{Fragment} from 'react'

import '../css/extras.css'

const ListaExtras = () => {
    return ( 
        <Fragment>
            <div className="card">
                <div className="card-header extra">TIP 1</div>
                <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, numquam!</div>
            </div>
            <hr/>
            <div className="card">
                <div className="card-header extra">TIP 2</div>
                <div className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, corporis.</div>
            </div>
            <hr/>
        </Fragment>
     );
}
 
export default ListaExtras;