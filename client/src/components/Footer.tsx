import LogoNoir from "../assets/images/LOGO-BLANC.svg"

function Footer() {

    return (
    <div className="footer">
        <footer>

        <img src={LogoNoir} alt="Gamespace Logo" className="logo" />
     
        <div className="footer-center">
        <p>Copyright 2025</p>
      </div>

      <div className="footer-right">
        <a href="/mentions-legales">Mentions légales</a>
      </div>

 </footer>
 </div>
       
   
    );
}





export default Footer ;

