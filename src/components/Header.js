import './Header.css'

const Header = () =>{
    return (
        
        <header className='header'>Header
            <div className='headerContainer'>
                <div className='headerLogo'></div>  
                    <div className='mainHeaderContainer'> 

                        <div className='headerButtonContainer'>
                            <div className='headerButtonOnlineCinema'>
                                <a className='headerOnlineA'>Онлайн-кинотеатр</a>
                                    </div>

                            <div className='headerButtonSetupTV'>
                                <a className='headerSetupA'>Установить на ТВ</a>
                                    </div>

                    </div>


                    <div className='headerSearch'>
                        <div className='headerSearchContainer'>
                            <input className='headerSerchInput' placeholder='God knows...'></input>
                                </div>
                                    </div>
                    <div className='headerSignUp'>
                        <div className='headerButtonSignUp'>
                            <a className='headerSignUpA' >Войти</a>
                        </div>

                        <div className='headerButtonYandex'></div>
                    </div>

                                        </div>



                    </div>
                    
        </header> 

    );
}

export default Header;