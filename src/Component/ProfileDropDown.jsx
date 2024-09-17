import React, { useContext, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { auth } from "../firebase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { userContext } from "../Contexts/UserContext";

export default function ProfileDropDown() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { user, setUser } = useContext(userContext);

  // console.log(user);
  
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setLoading(false);
        toast.success("Sign Out Successful");
        navigate("/login");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("An error happened.");
      });
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" className="bg-slate-700">
        <DropdownTrigger>
          <Avatar
            isBordered
            className="transition-transform cursor-pointer"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={logOut}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
