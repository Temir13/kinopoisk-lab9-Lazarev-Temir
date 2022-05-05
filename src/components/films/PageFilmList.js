import { Component } from 'react';
import s from "./PageFilmList.module.css";
import {Filmcover} from './Filmcover';


class PageFilmList extends Component{
    render(){
      return (
          <div className={s.Container}>
    <div className={s.body}>
        <div className={s.ContentList}>
                    <div className={s.ContentListNam}>
                        Список доступных Фильмов
                        <a className={s.ContentListA}></a>

                        <div className={s.listContainer}>
                            
                            <Filmcover filmArt={'https://kawai.shikimori.one/system/animes/original/7311.jpg?1633690853'}
                            filmName='Исчезновение Харухи Судзумии'
                            filmYear='2011'
                            filmLink={'https://shikimori.one/animes/z9253-steins-gate.com'}/>

                            <Filmcover filmArt={'https://desu.shikimori.one/system/animes/original/9253.jpg?1650921326'}
                            filmName='Врата Штейна / Steins;Gate'
                            filmYear='2011'/>
                            
                            <Filmcover filmArt={'https://nyaa.shikimori.one/system/animes/original/31240.jpg?1633871067'}
                            filmName='Жизнь с нуля в альтернативном мире'
                            filmYear='2016'/>

                            <Filmcover filmArt={'https://desu.shikimori.one/system/animes/original/31043.jpg?1634705308'}
                            filmName='Город, в котором меня нет '
                            filmYear='2016'/>

                            <Filmcover filmArt={'https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/02/phpETx4Y5-467x697.jpg'}
                            filmName='Футурама'
                            filmYear='1999'/>                         
                            
                        </div>

                        <div className={s.listContainer}>

                           <Filmcover filmArt={'https://nyaa.shikimori.one/system/animes/original/31240.jpg?1633871067'}
                            filmName='Жизнь с нуля в альтернативном мире'
                            filmYear='2016'/>

                            

                            <Filmcover filmArt={'https://desu.shikimori.one/system/animes/original/31043.jpg?1634705308'}
                            filmName='Город, в котором меня нет '
                            filmYear='2016'/>
                                                 
                            <Filmcover filmArt={'https://desu.shikimori.one/system/animes/original/9253.jpg?1650921326'}
                            filmName='Врата Штейна / Steins;Gate'
                            filmYear='2011'/>

                            <Filmcover filmArt={'https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/02/phpETx4Y5-467x697.jpg'}
                            filmName='Футурама'
                            filmYear='1999'/>  

                            <Filmcover filmArt={'https://kawai.shikimori.one/system/animes/original/7311.jpg?1633690853'}
                            filmName='Исчезновение Харухи Судзумии'
                            filmYear='2011'
                            filmLink={'https://shikimori.one/animes/z9253-steins-gate.com'}/>
                        </div>

                        <div className={s.listContainer}>
                            <Filmcover filmArt={'https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/02/phpETx4Y5-467x697.jpg'}
                            filmName='Футурама'
                            filmYear='1999'/>  
                            
                            <Filmcover filmArt={'https://desu.shikimori.one/system/animes/original/9253.jpg?1650921326'}
                            filmName='Врата Штейна / Steins;Gate'
                            filmYear='2011'/>
                            
                            <Filmcover filmArt={'https://nyaa.shikimori.one/system/animes/original/31240.jpg?1633871067'}
                            filmName='Жизнь с нуля в альтернативном мире'
                            filmYear='2016'/>

                            <Filmcover filmArt={'https://kawai.shikimori.one/system/animes/original/7311.jpg?1633690853'}
                            filmName='Исчезновение Харухи Судзумии'
                            filmYear='2011'
                            filmLink={'https://shikimori.one/animes/z9253-steins-gate.com'}/>

                            <Filmcover filmArt={'https://desu.shikimori.one/system/animes/original/31043.jpg?1634705308'}
                            filmName='Город, в котором меня нет '
                            filmYear='2016'/>                            
                        </div>

                    </div>
                </div>  
           </div>
        </div>
 
     );
}
}

export {PageFilmList};