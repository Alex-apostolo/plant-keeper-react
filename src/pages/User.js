import { useLocation } from "react-router-dom";
const User = () => {
  const location = useLocation();
  console.log(location);
  const user = location.userData;
  return (
    <ul>
      <li>{user.id}</li>
      <li>{user.image}</li>
      <li>{user.fullName}</li>
      <li>{user.city}</li>
      <li>{user.country}</li>
      <li>{user.rating}</li>
    </ul>
  );
};

export default User;
