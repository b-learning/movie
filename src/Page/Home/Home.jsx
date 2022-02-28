import './style.scss'
import Header from '../../Component/header/Header'
import Carousel from '../../Component/carousel/Carousel'
import url from '../../api/movieURL'
function Home() {
    // props
    return (
        <div>
            <Header />
            <Carousel data={url.fetchNetflixOriginals} />
        </div>
    )
}

export default Home