import IProfile from "../models/IProfile";
import IUser from "../models/IUser";
import DefaultPic from "../../assets/defaultProfilePic.png";

export const mockUser: IUser = {
  id: "1234",
  username: "SillyLily",
};

export const mockProfile: IProfile = {
  bio: "This is a profile where I write stuff about me. I hope you like it. Thank you for visiting my profile.",
  interests: ["Books", "Boots", "Boops", "Boobs"],
  pic: DefaultPic,
};
