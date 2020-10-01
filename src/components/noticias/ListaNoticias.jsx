import React,{useState , Fragment} from 'react'
import Noticia from './Noticia';

const ListaNoticias = () => {

    const [listanoticias,guardarListaNoticias]=useState([
        {id:1, titulo:'Primera Noticia', fecha:'01/10/2020', autor:'Ing. Deyby Baner Hurtado',introduccion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam facilis doloremque fugiat voluptatem! Magnam iure delectus doloribus aperiam amet?'},
        {id:2, titulo:'Segunda Noticia', fecha:'30/09/2020', autor:'Ing. Deyby Baner Hurtado',introduccion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam facilis doloremque fugiat voluptatem! Magnam iure delectus doloribus aperiam amet?'},
        {id:3, titulo:'Tercera Noticia', fecha:'25/09/2020', autor:'Ing. Deyby Baner Hurtado',introduccion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam facilis doloremque fugiat voluptatem! Magnam iure delectus doloribus aperiam amet?'},
        // {id:4, titulo:'Cuarta Noticia', fecha:'20/09/2020', autor:'Ing. Deyby Baner Hurtado',introduccion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam facilis doloremque fugiat voluptatem! Magnam iure delectus doloribus aperiam amet?'}
    ])
    return ( 
        <Fragment>
            <hr/>
            { listanoticias.map(noticia => {
                return <Noticia key={noticia.id} noticia={noticia}/>
            })}
        </Fragment>
     );
}
 
export default ListaNoticias;