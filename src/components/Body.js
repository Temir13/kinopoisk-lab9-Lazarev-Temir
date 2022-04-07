import './Body.css'

const Body = () =>{
    return (
        <div className='body'>

            <div className='sideBar'>
                <div className='sideBarContainer'>
                    <div className='mainS'>
                        <a className='mainSA'>Главная</a>
                    </div>

                    <div className='onlineS'>
                        <a className='mainSA'>Онлайн-кинотеатр</a>
                    </div>

                    <div className='filmS'>
                        <a className='mainSA'>Фильмы</a>
                    </div>

                    <div className='serialS'>
                        <a className='mainSA'>Сериалы</a>
                    </div>

                    <div className='ticketS'>
                        <a className='mainSA'>Билеты в кино</a>
                    </div>

                    <div className='mediaS'>
                        <a className='mainSA'>Медиа</a>
                    </div>

                </div>
            </div>



                <div className='bodyContainer'>
                <div className='bodyMainContent'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/G6NaVH-_wPM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
                </div>
                <div className='bodyContentList'>
                    <div className='bodyContentListName'>
                        <a className='bodyContentListA'>Билеты в кино</a>

                        <div className='listContainer'>
                            <a href='https://www.kinopoisk.ru/film/492569/' className='cinemaContent1'>
                                <div className='cinemaArt1'></div>
                                <a className='cinemaName1'>Исчезновение Харухи Судзумии</a>
                                <a className='cinemaYear1'>2010</a>
                            </a>
                            <a href='https://www.kinopoisk.ru/film/370/' className='cinemaContent2'>
                                <div className='cinemaArt2'></div>
                                <a className='cinemaName1'>Унесённые призраками</a>
                                <a className='cinemaYear1'>2001</a>
                            </a>
                            <a href='https://www.kinopoisk.ru/film/718442/' className='cinemaContent3'>
                                <div className='cinemaArt3'></div>
                                <a className='cinemaName1'>Врата Штейна: Зона загрузки дежавю</a>
                                <a className='cinemaYear1'>2013</a>
                            </a>
                            <a href='https://www.kinopoisk.ru/series/957840/' className='cinemaContent4'>
                                <div className='cinemaArt4'></div>
                                <a className='cinemaName1'>Город, в котором меня нет</a>
                                <a className='cinemaYear1'>2016</a>
                            </a>
                            <a href='https://www.kinopoisk.ru/series/406148/' className='cinemaContent5'>
                                <div className='cinemaArt5'></div>
                                <a className='cinemaName1'>Тетрадь смерти</a>
                                <a className='cinemaYear1'>2006</a>
                            </a>
                        </div>
                    </div>
                </div>        
            </div>                  
        </div>
    );
}

export default Body;