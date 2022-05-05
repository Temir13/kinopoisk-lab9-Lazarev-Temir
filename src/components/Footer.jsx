import s from './Footer.module.css'

const Footer = () =>{
    return (
        <footer className={s.footer}>
            <div className={s.Block}>
                <div className={s.Container}>
                    <div className={s.SocialLinksUp}>
                        <div className={s.IconsUp}>
                            <a href="https://vk.com/kinopoisk" className={s.IconVK}></a>
                            <a href="https://www.facebook.com/kinopoisk" className={s.IconFB}></a>
                            <a href="https://twitter.com/kinopoiskru" className={s.IconTW}></a>
                            <a href="https://telegram.me/kinopoisk" className={s.IconTG}></a>
                            <a href="https://www.instagram.com/kinopoisk/" className={s.IconIN}></a>
                            <a href="https://www.youtube.com/user/kinopoisk" className={s.IconYT}></a>
                        </div>
                        <div className={s.BlogsUp}>
                            <a className={s.BlogVacancy}>Вакансии</a>
                            <a className={s.BlogCommercial}>Реклама</a>
                            <a className={s.BlogApproval}>Соглашение</a>
                            <a className={s.BlogReference}>Справка</a>
                            <a className={s.BlogBlog}>Блог</a>
                            <a className={s.BlogResearch}>Участие в исследованиях</a>
                            <a className={s.BlogProposal}>Предложения</a>
                            <a className={s.BlogHelpDesk}>Служба поддержки</a>
                        </div>
                    <div className={s.AppLinksUpContainer}>
                        <a className={s.AppStore}></a>
                        <a className={s.GooglePlay}></a>
                        <a className={s.AppGallery}></a>
                    </div>
                    
                </div>  
                    <div className={s.LinksDownContainer}>
                        <div className={s.LinksDownBlock}>
                            <div className={s.DownYear}>© 2003 — 2022, 
                                <a className={s.DownKPA}>  Кинопоиск  </a>
                                <a className={s.Down18A}>  18+</a>
                            </div>
                            <div className={s.DownLink}>
                                <a className={s.DownTeleProgramm}>Телепрограмма</a>
                                <a className={s.DownMusic}>Музыка</a>
                                <a className={s.DowsPlayBill}>Афиша</a>
                            </div>
                            <div className={s.DownProject}>Проект Студента:
                                <a href='https://instagram.com/lazarev_temir?igshid=YmMyMTA2M2Y=' className={s.DownLazarus}> Темира Лазарева</a>


                            </div>

                        </div>
                    </div>            
                </div>
            </div>
        </footer>

    );
}

export default Footer;