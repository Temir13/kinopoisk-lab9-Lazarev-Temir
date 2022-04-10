import './Footer.css'

const Footer = () =>{
    return (
        <footer className='footer'>
            <div className='footerBlock'>
                <div className='footerContainer'>
                    <div className='footerSocialLinksUp'>
                        <div className='footerIconsUp'>
                            <a href="https://vk.com/kinopoisk" className='footerIconVK'></a>
                            <a href="https://www.facebook.com/kinopoisk" className='footerIconFB'></a>
                            <a href="https://twitter.com/kinopoiskru" className='footerIconTW'></a>
                            <a href="https://telegram.me/kinopoisk" className='footerIconTG'></a>
                            <a href="https://www.instagram.com/kinopoisk/" className='footerIconINS'></a>
                            <a href="https://www.youtube.com/user/kinopoisk" className='footerIconYT'></a>
                        </div>
                        <div className='footerBlogsUp'>
                            <a className='footerBlogVacancy'>Вакансии</a>
                            <a className='footerBlogCommercial'>Реклама</a>
                            <a className='footerBlogApproval'>Соглашение</a>
                            <a className='footerBlogReference'>Справка</a>
                            <a className='footerBlogBlog'>Блог</a>
                            <a className='footerBlogResearch'>Участие в исследованиях</a>
                            <a className='footerBlogProposal'>Предложения</a>
                            <a className='footerBlogHelpDesk'>Служба поддержки</a>
                        </div>
                    <div className='footerAppLinksUpContainer'>
                        <a className='footerAppStore'></a>
                        <a className='footerGooglePlay'></a>
                        <a className='footerAppGallery'></a>
                    </div>
                    
                </div>  
                    <div className='footerLinksDownContainer'>
                        <div className='footerLinksDownBlock'>
                            <div className='footerDownYear'>© 2003 — 2022, 
                                <a className='footerDownKPA'>  Кинопоиск  </a>
                                <a className='footerDown18A'>  18+</a>
                            </div>
                            <div className='footerDownLink'>
                                <a className='footerDownTeleProgramm'>Телепрограмма</a>
                                <a className='footerDownMusic'>Музыка</a>
                                <a className='footerDowsPlayBill'>Афиша</a>
                            </div>
                            <div className='footerDownProject'>Проект Студента:
                                <a href='https://instagram.com/lazarev_temir?igshid=YmMyMTA2M2Y=' className='footerDownLazarus'> Темира Лазарева</a>


                            </div>

                        </div>
                    </div>            
                </div>
            </div>
        </footer>

    );
}

export default Footer;