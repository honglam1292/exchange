/** @jsxImportSource @emotion/react */

import { useSideBarStore } from "@/stores/sidebarStore";
import { HeaderPageStyle } from "./style";
import { useUserToken } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthApi } from "@/api/auth";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PATH } from "@/constants/path";

function HeaderPage() {
  const { open, onOpen } = useSideBarStore();
  const setIsAuth = useUserToken((state) => state.setIsAuth);
  const setUsername = useUserToken((state) => state.setUsernameLocale);
  const setToken = useUserToken((state) => state.setTokenLocale);
  const profile = useUserToken((state) => state.profile);
  const username = useUserToken((state) => state.username);
  const setProfile = useUserToken((state) => state.setProfile);

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUsername("");
    setToken("");
    setIsAuth(false);
    navigate("/login");
  };
  const getData = async () => {
    const profile = await AuthApi.getProfile({ username });
    setProfile(profile.data)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div css={HeaderPageStyle.index}>
      <div onClick={() => onOpen(!open)} css={HeaderPageStyle.menuBtn(open)}>
        <i className="fa-solid fa-align-right"></i>
      </div>
      <div css={HeaderPageStyle.content}>
        <div className="account">
          <p>{profile?.full_name}</p>
          <p>0.00$</p>
        </div>
        {/* <img className="avatar" src={profile?.avatar} alt="" /> */}
        <img className="avatar" src={profile?.avatar || "https://i.pravatar.cc/300"} alt="" />
        <div className="down-menu" onClick={handleClick}>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => {
            handleClose()
            navigate(PATH.inforUser)
          }}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default HeaderPage;
