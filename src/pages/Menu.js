function Menu () {
    return (
        <div className="header">
            <div className="logo">
                <img src="/img/logo.png" alt="image"/>
            </div>
            <ul className="menu">
                <li className="subM"><a className="link" target="_self" href="/about">Company</a></li>
                <li className="subM"><a className="link" target="_self" href="/product">Product</a></li>
                <li className="subM"><a className="link" target="_self" href="/business">Develop</a></li>
                <li className="subM"><a className="link" target="_self" href="/tech">Tech</a></li>
                <li className="subM"><a className="link" target="_self" href="/noti">Notice</a></li>
                <li className="subM"><a className="link" target="_self" href="/qna">Contact Us</a></li>
            </ul>
        </div>
        
    );

    
}
export default Menu