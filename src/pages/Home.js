import Searchbar from "../components/SearchBar";
import ProfileCardGrid from "../components/ProfileCardGrid";

const profiles = [
  {
    image: "alex",
    fullName: "Alexandros Apostolopoulos",
    city: "Athens",
    country: "Greece",
    rating: `${Math.random()*5}`
  }
  ,{
    image: "alex",
    fullName: "Alexandros Apostolopoulos",
    city: "Athens",
    country: "Greece",
    rating: `${Math.random()*5}`
  }
  ,{
    image: "alex",
    fullName: "Alexandros Apostolopoulos",
    city: "Athens",
    country: "Greece",
    rating: `${Math.random()*5}`
  }
  ,{
    image: "alex",
    fullName: "Alexandros Apostolopoulos",
    city: "Athens",
    country: "Greece",
    rating: `${Math.random()*5}`
  }
  ,{
    image: "alex",
    fullName: "Alexandros Apostolopoulos",
    city: "Athens",
    country: "Greece",
    rating: `${Math.random()*5}`
  }
  ,{
    image: "alex",
    fullName: "Alexandros Apostolopoulos",
    city: "Athens",
    country: "Greece",
    rating: `${Math.random()*5}`
  }
  ,{
    image: "alex",
    fullName: "Alexandros Apostolopoulos",
    city: "Athens",
    country: "Greece",
    rating: `${Math.random()*5}`
  }
]

const Home = () => {
  return (
    <div>
      <Searchbar />
      <ProfileCardGrid profiles={profiles}/>
    </div>
  );
};

export default Home;
