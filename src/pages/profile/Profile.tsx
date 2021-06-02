import { FC, useContext } from "react";
import { AuthContext } from "../../store/providers/AuthProvider";

const Profile: FC = () => {
  const auth = useContext(AuthContext);

  console.log(auth);

  return <div className="main-content profile">HELLO PROFILE</div>;
};

export default Profile;
