const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className="main-footer font-xs">
            <div className="row">
                <div className="col-sm-6">
                    {date}
                    &copy; Nest - HTML Ecommerce Template .
                </div>
                <div className="col-sm-6">
                    <div className="text-sm-end">All rights reserved</div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;