import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { IslandAnimation } from "../../components/Home/IslandAnimation/IslandAnimation";
import { cs } from "../../../utils/styles/commonStyles";

export const HomePage = () => {
  const TitleUnderline = styled.hr`
    opacity: 0.5;
    margin-bottom: 5rem;
  `;
  return (
    <HomePageLayout>
      <Typography variant="h4" component="h1">
        すべてのアプリ
      </Typography>
      <Typography css={cs.lhSmall} variant="subtitle1" component="span">
        デベロッパー アカウントでアクセスできるアプリやゲームがすべて表示されます。
      </Typography>
      <TitleUnderline />
      <dl>
        <Typography css={cs.lhSmall} variant="h5" component="dt">
          最初のアプリの作成
        </Typography>
        <Typography css={cs.lhSmall} variant="body1" component="dd">
          作成したアプリはこのページに表示されます。まず、最初のアプリを作成してください。
        </Typography>
        <div css={cs.fx}>
          <Button variant="contained">アプリを作成</Button>
          <Button>詳細</Button>
        </div>
      </dl>
      <div css={cs.fx}>
        <IslandAnimation />
      </div>
    </HomePageLayout>
  );
};

const HomePageLayout = styled.div`
  margin: 1rem 2rem 0 2rem;
`;
