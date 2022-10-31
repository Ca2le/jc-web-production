/* //
*--------------------------------------------------------------------- 
*                    I use CL as standard alias 🦆                                                
*       import * as CL from '../components/components.libary'             
*--------------------------------------------------------------------- 
*/

// Global Context 🌍
import { LangageContext as  LangageContextComponent} from "./context/langage_context.component";
import { ScreenSizeContext as  ScreenSizeContextComponent} from "./context/screen_size_context.component";
import { HamburgerToggleContext as HamburgerToggleContextComponent } from "./context/hamburger_toggle_context";
import { ScrollContext as ScrollContextComponent } from "./context/scrollContext.component";
import { IntersectionContext as IntersectionContextComponent } from "./context/intersection_context";

export const LangageContext = LangageContextComponent
export const ScreenSizeContext = ScreenSizeContextComponent
export const HamburgerToggleContext = HamburgerToggleContextComponent
export const ScrollContext = ScrollContextComponent
export const IntersectionContext = IntersectionContextComponent
// Template Components 🦕

import FooterComponent from "./footer/footer.component";
import NavbarComponent from "./navbar/navbar.component";

export const Footer = FooterComponent
export const Navbar = NavbarComponent

// Navbar Components 
import hamburgerComponent from "./navbar/hamburger/hamburger.component";
import NavLinksComponent from "./navbar/nav_links/nav_links.component";

export const HamburgerComponent = hamburgerComponent
export const NavLinks = NavLinksComponent


// Homepage Components 🏠

import HomeComponent from './home/home.component'
export const Home = HomeComponent

// Section 1️⃣ Components 
import Section_1Component from './home/section_1/section_1.component'
import HeroImageComponent from "./home/section_1/hero_image/hero_image.component";
import InfoBtnComponent from "./home/section_1/info_btn/info_btn.component";
import HeaderComponent from './home/section_1/header/header.component'
export const Section_1 = Section_1Component
export const HeroImage = HeroImageComponent
export const InfoBtn = InfoBtnComponent
export const Header = HeaderComponent 

// Section 2️⃣ Components 
import Section_2Component from './home/section_2/section_2.component'
import WideCardComponent from "./home/section_2/wide_card/wide_card.component";
import OverlapComponent from "./home/section_2/overlap/overlap.component";
export const WideCard = WideCardComponent 
export const Section_2 = Section_2Component
export const Overlap = OverlapComponent

// Section 3️⃣ Components 
import Section_3Component from './home/section_3/section_3.component'
import CardsComponent from './home/section_3/cards/cards.component'
import TitleComponent from "./home/section_3/title/title.component";
import MagicBoxComponent from "./home/section_3/title/magic_box/magic_box.component";
import MagicUnderLineComponent from "./home/section_3/title/magic_underline/magic_underline.component";
import SubtextComponent from "./home/section_3/subtext/subtext.component";

export const Cards = CardsComponent
export const Title = TitleComponent
export const MagicBox = MagicBoxComponent
export const MagicUnderLine = MagicUnderLineComponent
export const Subtext = SubtextComponent
export const Section_3 = Section_3Component

// Global Components 🌐

import ButtonComponent from "./button/button";
import LinkComponent from "./link/link.component";
import LogoComponent from "./logo/logo.component";
import InputScrollComponent from "./input_scroll/input_scroll.component";

export const InputScroll = InputScrollComponent
export const Logo= LogoComponent
export const Button = ButtonComponent
export const Link = LinkComponent

// Foot Components 🏈
import FootLogoComponent from "./footer/foot_logo/foot_logo.component";
import IconComponent from "./footer/icon/icon.component";
import CopyMessageComponent from "./footer/copy_message/copy_message.component";
export const CopyMessage = CopyMessageComponent
export const FootLogo = FootLogoComponent
export const Icon = IconComponent




// Other

import { convertDeviceToSize as convertDeviceToSizeConverter } from './context/convertDeviceToSize'


export const convertDeviceToSize = convertDeviceToSizeConverter

// Developer Page
import DeveloperPageComponent from "./developer_page/developer_page.component";
export const DeveloperPage = DeveloperPageComponent