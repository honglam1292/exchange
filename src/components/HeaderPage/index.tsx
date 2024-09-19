/** @jsxImportSource @emotion/react */

import { useSideBarStore } from "@/stores/sidebarStore";
import { HeaderPageStyle } from "./style";
import { useUserToken } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthApi } from "@/api/auth";

function HeaderPage() {
  const { open, onOpen } = useSideBarStore();
  const setIsAuth = useUserToken((state) => state.setIsAuth);
  const setUsername = useUserToken((state) => state.setUsernameLocale);
  const setToken = useUserToken((state) => state.setTokenLocale);
  const profile = useUserToken((state) => state.profile);
  const username = useUserToken((state) => state.username);
  const setProfile = useUserToken((state) => state.setProfile);

  const navigate = useNavigate();

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
      <div css={HeaderPageStyle.content} onClick={handleLogout}>
        <div className="account">
          <p>Admin</p>
          <p>0.00$</p>
        </div>
        {/* <img className="avatar" src={profile?.avatar} alt="" /> */}
        <img className="avatar" src={"https://i.pravatar.cc/300"} alt="" />
        <div className="down-menu">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
