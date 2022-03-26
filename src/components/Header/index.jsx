import mainCSS from "../../assets/styles/index.module.css";
import headerCSS from "./header.module.css";
import logo from "../../assets/img/logo.png";

export const Header = () => {
    return(
        <div className={headerCSS.header}>
            <div className={mainCSS.container}>
                <div className={headerCSS.header__content}>

                    <a className={headerCSS.logo} href="#">
                        <img className={headerCSS.logoPhoto} src={logo}/>
                        <p className={headerCSS.logoText}>StikerFace</p>
                    </a>

                    <div className={headerCSS.navBar}>
                        <a className={headerCSS.navBar__link} href="#">About</a>
                        <a className={headerCSS.navBar__link} href="#">NFT</a>
                        <a className={headerCSS.navBar__link} href="#">Constructor</a>
                        <a className={headerCSS.navBar__link} href="#">App</a>
                        <a className={headerCSS.navBar__link} href="#">SDK</a>
                        <a className={headerCSS.navBar__link} href="#">Contact</a>
                    </div>

                    <button className={headerCSS.createAvatar}>Create Avatar</button>

                </div>
            </div>
        </div>
    );
}