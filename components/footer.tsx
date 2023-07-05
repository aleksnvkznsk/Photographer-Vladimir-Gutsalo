import '@/styles/footer.scss';

function Footer() {
    return (
        <>
            <div className="end">
                <a href="https://vk.com/publicphotogutsalo" target=" blank"><img className="end__link" src="/vk.svg" /></a>
                <a href="https://t.me/vovagutsalo" target=" blank"><img className="end__link" src="/telegram.svg" /></a>
                <a href="https://wa.me/89133352108" target=" blank"><img className="end__link" src="/whatsapp.svg" /></a>
                <h4 className="end__phone">+7 (913) 335 21 08</h4>
            </div>

            <div className="aleks">
                <a className="aleks__href" href="https://aleksandrovdeveloper.ru" target=" blank">сайт от Aleksandrov Developer</a>
            </div>
        </>
    );
}

export default Footer;