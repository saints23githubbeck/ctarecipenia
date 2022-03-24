
import headerImage from "../../assets/images/header-image.png"
import headerBg from "../../assets/images/header-bg-vector.png"

const Header = () => {
  return (
    <header>
      <img src={headerBg} alt="" />
      <div className=" hero">
        <div>
          <h1>Discover the best recipes with us</h1>
        </div>
        <div>
          <img src={headerImage} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header