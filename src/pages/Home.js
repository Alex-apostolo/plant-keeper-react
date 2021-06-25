import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import UserCardGrid from "../components/UserCardGrid";
import "./Home.scss";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async (number) => {
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

    const response = await fetch(
      `https://randomuser.me/api/?results=${number}&seed=foobar&page=1&inc=login,picture,name,location`
    );
    const data = await response.json();
    setUsers(formatUsers(data.results));
    setLoading(false);
  };

  useEffect(() => fetchUsers(42), []);

  return (
    <div className="position-relative users-container">
      <SearchBar />
      {loading && users.length === 0 && (
        <Spinner className="position-absolute spinner" animation="border" role="status" variant="secondary"/>
      )}
      {!loading && users.length > 0 && <UserCardGrid users={users} />}
    </div>
  );
};

export default Home;
