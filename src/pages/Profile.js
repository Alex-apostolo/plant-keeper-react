import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState(location.customData);

  useEffect(() => {
    setUser(location.customData);
  }, [location]);

  return (
      <ul>
          <li>{user.image}</li>
          <li>{user.fullName}</li>
          <li>{user.city}</li>
          <li>{user.country}</li>
          <li>{5}</li>
      </ul>
  );
};

export default Profile;
