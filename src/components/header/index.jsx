import {ReactComponent as StarWarsLogoSVG} from "../../assets/star-wars.svg";
import {ReactComponent as IconSearchSVG} from "../../assets/icon-search.svg";
import {ReactComponent as FacebooLogokSVG} from "../../assets/facebook.svg";
import {ReactComponent as InstagramLogoSVG} from "../../assets/instagram.svg";
import {ReactComponent as TwitterLogoSVG} from "../../assets/twitter.svg";
import {ReactComponent as YoutubeLogoSVG} from "../../assets/youtube.svg";



const swLinks = [
    {
    url: "https://ru-ru.facebook.com/StarWars/",
    name: "facebook-logo",
    component: <FacebooLogokSVG />
    },
    {
      url: "https://www.instagram.com/starwars/",
      name: "instagram-logo",
      component: <InstagramLogoSVG />
    },
    {
      url: "https://twitter.com/starwars",
      name: "twitter-logo",
      component: <TwitterLogoSVG />
    },
    {
      url: "https://www.youtube.com/c/StarWars",
      name: "youtube-logo",
      component: <YoutubeLogoSVG />
    }
    ]

export const Header = () => {
    return (
    <><header>
    <div className="links-layout">
      {swLinks.map((link)=>(
        <a
        key={link.name}
        className="link"
        href={link.url}
        target="_blank"
        alt={link.name}
        rel="noreferrer">
        {link.component}
        </a>
      ))}
    </div>
    <StarWarsLogoSVG/>
    <div className="search-layout">
      <IconSearchSVG className="search-icon"/>
      <input placeholder="Search Star Wars" 
      type="text"></input>
    </div>
    </header>
    </>)
};