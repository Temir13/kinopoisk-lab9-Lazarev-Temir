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
                        <div className='footerBlogUp'>footerBlogUp</div>
                        <div className='footerAppLinksUpContainer'>footerAppLinksUpContainer</div>
                    
                    </div>  
                    <div className='footerLinksDownContainer'>
                        <div className='footerLinksDownBlock'>footerLinksDownBlock</div>
                    </div>            
                </div>
            </div>
        </footer>

    );
}

export default Footer;