import logo from '../img/logo_large.png'
const Navegacion = () => {
    return (
        <nav>
    <div className="nav-wrapper">
      <img href="#" className="header__logo" src={logo} alt="logo" srcset=""
          />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">PERFUMES</a></li>
        <li><a href="badges.html">SALE</a></li>
        <li><a href="collapsible.html">CONTACTO</a></li>
      </ul>
    </div>
  </nav>
    )
}
export default Navegacion