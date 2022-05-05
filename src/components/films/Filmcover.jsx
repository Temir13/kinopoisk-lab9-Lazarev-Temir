import s from './Filmcover.module.css'


const Filmcover = (props) =>{
    return (   
         <div className={s.container}> 
            <div className={s.cinemaContainer}>
            <img  className={s.cinemaArt} src = { props.filmArt } />
            </div>
                <div className={s.namecont}>
                <a href={props.filmLink} className={s.cinemaName}>{props.filmName}</a>
                </div>
                    <div className={s.yearcont}>
                    <a className={s.cinemaYear}>{props.filmYear} год</a>      
                    </div>     
        </div>
    );
}

export {Filmcover};