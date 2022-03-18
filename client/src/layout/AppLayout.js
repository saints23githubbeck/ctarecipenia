
import Footer from '../components/Footer'
import Nav from '../components/Nav'


const AppLayout = (props) => {

  const { landingPage } = props;

  return (
    <div>
      <Nav landingPage={landingPage} />
        {props.children}
      <Footer />
    </div>
  )
}

export default AppLayout