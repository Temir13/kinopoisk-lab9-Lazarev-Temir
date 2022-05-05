import s from './Header.module.css'

const Header = () =>{
    return (
        
        <header className={s.header}>
            <div className={s.Container}>
                <div className={s.Logo}><a href='https://www.kinopoisk.ru/' className={s.LogoA}></a></div>  
                    <div className={s.mainContainer}> 

                        <div className={s.ButtonContainer}>
                            <div className={s.ButtonOnlineCinema}>
                                <a href='https://hd.kinopoisk.ru/'  className={s.OnlineA}>Онлайн-кинотеатр</a>
                                    </div>

                            <div className={s.ButtonSetupTV}>
                                <a href='https://www.kinopoisk.ru/special/smarttv_instruction/?utm_source=kinopoisk&utm_medium=selfpromo_kp&utm_campaign=button_header' className={s.SetupA}>Установить на ТВ</a>
                                    </div>

                    </div>


                    <div className={s.Search}>
                        <div className={s.SearchContainer}>
                            <input className={s.SerchInput} placeholder='God knows...'></input>
                                </div>
                                    </div>
                    <div className={s.SignUp}>
                        <div className={s.ButtonSignUp}>
                            <a href='https://passport.yandex.ru/auth?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252Fapi%252Fprofile-pending%252F%253Fretpath%253Dhttps%25253A%25252F%25252Fwww.kinopoisk.ru%25252F%26uuid%3D1d6edb0e-91c8-4042-b8a2-7b7a6df666c8'
                        className={s.SignUpA} >Войти</a>
                        </div>

                        <a href='https://hd.kinopoisk.ru/?source=kinopoisk_head_button' className={s.ButtonYandex}></a>
                    </div>

                 </div>



                    </div>
                    
        </header> 

    );
}

export default Header;