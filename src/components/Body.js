import React from 'react';
import './Body.css'

const Body = () =>{
    return (
        <div className='body'>Body
                <div className='bodyContainer'>
                <div className='bodyMainContent'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/G6NaVH-_wPM" title="YouTube video player"></iframe>
               
                </div>
                <div className='bodyContentList'>
                    <div className='bodyContentListName'>
                        <a className='bodyContentListA'>Билеты в кино</a>

                        <div className='listContainer'>
                            <div className='cinemaContent1'>
                                <div className='cinemaArt1'></div>
                                <a className='cinemaName1'>Исчезновение Харухи Судзумии</a>
                                <a className='cinemaYear1'>2010</a>
                                  </div>

                            <div className='cinemaContent2'>
                                <div className='cinemaArt2'></div>
                                <a className='cinemaName1'>Унесённые призраками</a>
                                <a className='cinemaYear1'>2001</a>
                                    
                                    </div>
                            <div className='cinemaContent3'>
                                <div className='cinemaArt3'></div>
                                <a className='cinemaName1'>Врата Штейна: Зона загрузки дежавю</a>
                                <a className='cinemaYear1'>2013</a>
                                
                                    </div>
                            <div className='cinemaContent4'>
                                <div className='cinemaArt4'></div>
                                <a className='cinemaName1'>Город, в котором меня нет</a>
                                <a className='cinemaYear1'>2016</a>
                            
                                    </div>
                            <div className='cinemaContent5'>
                                <div className='cinemaArt5'></div>
                                <a className='cinemaName1'>Тетрадь смерти</a>
                                <a className='cinemaYear1'>2006</a>
                            
                                    </div>
                                         </div>

                                </div>
                                    </div>

            


                                    </div>  

                
                        </div>
    );
}

export default Body;