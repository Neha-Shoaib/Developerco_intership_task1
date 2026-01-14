import Image from "next/image";
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import FlashDeals from '../components/FlashDeals'
import HomeAndOutdoor from '../components/HomeAndOutdoor'
import ElectronicsAndGadgets from '../components/ElectronicsAndGadgets'
import QueryForm from '../components/QueryForm'
import Recommended_Items from '../components/Recommended_Items'
import ExtraServices from '../components/ExtraServices'
import NewsletterSection from '../components/NewsletterSection'
import MainFooter from '../components/MainFooter'
export default function Home() {
  return (
    <>
    <Header />
    <HomeHero />
    <FlashDeals />
    <HomeAndOutdoor/>
    <ElectronicsAndGadgets />
    <QueryForm/>
    <Recommended_Items />
    <ExtraServices />
    < NewsletterSection/>
    <MainFooter />
    </>    
  );
}
