import s from './Body.module.css';
import { Component } from 'react';
import {Filmcover} from './films/Filmcover';


class Body extends Component{
    render(){
        const MainDescription = 'Произведение по одноименной ранобэ, фильм производства студии «Kyoto Animation». '
        const ActorsTitle = 'В главных ролях:'
        const Actors = 'Харухи Судзумия, Джон Смит, Ицки Коидзуми, Микуру Асахина, Юки Нагато'
        const DirectorsTitle = 'Режисcеры:'
        const Directors = 'Ясухиро Такэмото, Тацуя Исихара'
    return (
        <div className={s.body}>

                <div className={s.Container}>
                <div className={s.MainContent}>
                <a className={s.ContentGif}></a>
                <div className={s.ContentContainer}>
                    <div className={s.DescriptionBlock}>      
                        <a className={s.FilmName}></a>
                        <a className={s.Description}>
                            <label className={s.DescriptionText}>{MainDescription}</label>
                            <label className={s.ActorListText}>{ActorsTitle}</label>
                            <label className={s.ActorsNamesText}>{Actors}</label>
                            <label className={s.DirectorText}>{DirectorsTitle}</label>
                            <label className={s.DirectorNameText}>{Directors}</label>
                        </a>
                        <div className={s.LinkText}>Смотреть по ссылкам</div>
                        <div className={s.LickContainer}>
                            <a href='https://www.kinopoisk.ru/film/492569/' className={s.LinkButtonKinopoinsk}>Смотреть на Kinopoisk</a>
                            <a href='https://jut.su/suzumiya-haruhi/film-1.html' className={s.LinkButtonJitsu}>Смотреть на Jitsu</a>
                        </div>

                    </div>

                </div>
               
            </div>
            
                <div className={s.ContentList}>
                    <div className={s.ContentListNam}>
                        Новинки
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

                    </div>
                </div>        
            </div>                  
        </div>
    );
}
}

export default Body;