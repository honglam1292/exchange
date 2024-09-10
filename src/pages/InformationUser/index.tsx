/** @jsxImportSource @emotion/react */
import { InputCustom } from "@/components/InputCustom";
import { UserInforStyle } from "./style";

const InforUser = () => {
  return (
    <div css={UserInforStyle.content}>
      <h1>Information User</h1>
      <div css={UserInforStyle.Info}>
        <div css="">
          <div css={UserInforStyle.group}>
            <div css={UserInforStyle.halfWidth}>username</div>
            <div css={UserInforStyle.input}>
              <InputCustom />
            </div>
          </div>
          <div css={UserInforStyle.group}>
            <div css={UserInforStyle.halfWidth}>Email</div>
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
