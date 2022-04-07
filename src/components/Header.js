import './Header.css'

const Header = () =>{
    return (
        
        <header className='header'>
            <div className='headerContainer'>
                <div className='headerLogo'><a href='https://www.kinopoisk.ru/' className='headerLogoA'></a></div>  
                    <div className='mainHeaderContainer'> 

                        <div className='headerButtonContainer'>
                            <div className='headerButtonOnlineCinema'>
                                <a href='https://hd.kinopoisk.ru/'  className='headerOnlineA'>Онлайн-кинотеатр</a>
                                    </div>

                            <div className='headerButtonSetupTV'>
                                <a href='https://www.kinopoisk.ru/special/smarttv_instruction/?utm_source=kinopoisk&utm_medium=selfpromo_kp&utm_campaign=button_header' className='headerSetupA'>Установить на ТВ</a>
                                    </div>

                    </div>


                    <div className='headerSearch'>
                        <div className='headerSearchContainer'>
                            <input className='headerSerchInput' placeholder='God knows...'></input>
                                </div>
                                    </div>
                    <div className='headerSignUp'>
                        <div className='headerButtonSignUp'>
                            <a href='https://passport.yandex.ru/auth?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252Fapi%252Fprofile-pending%252F%253Fretpath%253Dhttps%25253A%25252F%25252Fwww.kinopoisk.ru%25252F%26uuid%3D1d6edb0e-91c8-4042-b8a2-7b7a6df666c8'className='headerSignUpA' >Войти</a>
                        </div>

                        <a href='https://hd.kinopoisk.ru/?source=kinopoisk_head_button' className='headerButtonYandex'></a>
                    </div>

                                        </div>



                    </div>
                    
        </header> 

    );
}

export default Header;