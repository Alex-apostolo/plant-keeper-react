import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import UserCardGrid from "../components/UserCardGrid";

const Home = () => {
  const number = 48;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${number}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUsers(formatUsers(data.results));
      });
  }, []);

  const formatUsers = (users) => {
    return users.map((user) => {
      return {
        id: user.login.uuid,
        image: user.picture.large,
        fullName: user.name.first + " " + user.name.last,
        city: user.location.city,
        country: user.location.country,
        rating: 5,
      };
    });
  };

  if (loading || users.length === 0)
    return (
      <div>
        <SearchBar />
        Fetching users
      </div>
    );

  return (
    <div>
      <SearchBar />
      <UserCardGrid users={users} />
    </div>
  );
};

export default Home;
