import Header from "./Header";
import Entry from './Entry';
import GoodNight from "./GoodNight";
import Contacts from "./Contacts";
export default function AppComponent(){
    return(
        <>
        <Header/>
        <Entry
        img="./src/assets/mount-fuji.jpg"
        country="JAPAN"
        link="https://www.google.com/maps/place/Mount+Fuji/@35.3606,138.7274"
        place="Mount Fuji"
        date="10 Dec, 2024 - 2 Jan, 2024"
        description="Mount Fuji is one of Japan's most iconic landmarks, a symbol of natural beauty and national pride.
          It has been a place of spiritual significance for centuries and continues to attract visitors from around the world."/>

        <Entry
        img="./src/assets/opera-house.jpg"
        country="AUSTRALIA"
        link="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8568,151.2153"
        place="Sydney Opera House"
        date="10 Dec, 2024 - 2 Jan, 2024"
        description="The Sydney Opera House is an iconic architectural masterpiece located on Sydney Harbour, Australia. Known for its distinctive sail-like design, it is a world-renowned venue for performing arts and 
      one of the most recognizable landmarks in the world."/>

        <Entry
        img="./src/assets/big-ben.jpg"
        country="UNITED KINGDOM"
        link="https://www.google.com/maps/place/Big+Ben/@51.5007,-0.1246"
        place="The Big Ben"
        date="10 Dec, 2024 - 2 Jan, 2024"
        description=" Big Ben is the nickname for the Great Bell of the Elizabeth Tower in London, England, and is one of the most famous landmarks in the UK. Its iconic clock face and historical significance 
      make it a symbol of British heritage and culture."/>

        <h1>I am the app component</h1>
        <GoodNight/>
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