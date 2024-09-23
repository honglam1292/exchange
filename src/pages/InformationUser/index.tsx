/** @jsxImportSource @emotion/react */
import { InputCustom } from "@/components/InputCustom";
import { UserInforStyle } from "./style";
import { useUserToken } from "@/stores/authStore";

const InforUser = () => {
  const profile = useUserToken((state) => state.profile);

  return (
    <div css={UserInforStyle.content}>
      <h1>Information User</h1>
      <div css={UserInforStyle.Info}>
        <div css="">
          <div css={UserInforStyle.group}>
            <div css={UserInforStyle.halfWidth}>User name: {profile?.full_name}</div>
            <div css={UserInforStyle.input}>
              <InputCustom />
            </div>
          </div>
          <div css={UserInforStyle.group}>
            <div css={UserInforStyle.halfWidth}>User email: {profile?.email}</div>
            <div css={UserInforStyle.input}>
              <InputCustom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforUser;
