import { useState, useEffect } from "react";
import Searchbar from "../components/SearchBar";
import ProfileCardGrid from "../components/ProfileCardGrid";

const Home = () => {
  const number = 48;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${number}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUsers(data.results);
      });
  }, []);

  if (loading || users.length === 0) return <div>Fetching users</div>;

  const profiles = users.map((user) => {
    return {
      id: user.login.uuid,
      image: user.picture.large,
      fullName: user.name.first + " " + user.name.last,
      city: user.location.city,
      country: user.location.country,
      rating: 5
    }
  })
  return (
    <div>
      <Searchbar />
      <ProfileCardGrid profiles={profiles} />
    </div>
  );
};

export default Home;
