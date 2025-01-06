import Header from "./Header";
import Entry from './Entry';
import GoodNight from "./GoodNight";
import Contacts from "./Contacts";
import Data from "../Data";
export default function AppComponent(){

const entryElements = Data.map((entry)=>{
    return(
        <Entry

        img={entry.img}
        country={entry.ciountry}
        link={entry.link}
        place={entry.place}
        date={entry.date}
        description={entry.description}

        />
    )
})

    return(
        <>
        <Header/>
        {entryElements}

        <div className="contacts-container">
    
        <Contacts 
        img="./src/assets/cat1.jpg"
        name="Mr. Cattison"
        phone="(519)-778-9900"
        email="cattison@wixwiz.com"/>
        <Contacts
          img="./src/assets/wolf.jpg"
          name="Mr. Kanewolf"
          phone="(719)-778-8902"
          email="kanewolf@wixwiz.com"/>
        <Contacts img="./src/assets/puppy.jpg"
          name="Ms. Shitzhu"
          phone="(216)-123-7945"
          email="shihtzu@wixwiz.com"/>
          <Contacts img="./src/assets/lion.jpg"
          name="Mr. Kingspade"
          phone="(289)-336-7900"
          email="Kingspade@wixwiz.com"/>
        </div>
        </>
    );
}
