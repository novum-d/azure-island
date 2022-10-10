import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { IslandAnimation } from "../../components/Home/IslandAnimation";
import { cs } from "../../style/commonStyles";

export const HomePage = () => {
  const Layout = styled.div`
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  `;
  return (
    <Layout>
      <Title />
      <TitleUnderline />
      <FirstAppDetail />
      <div css={cs.fx}>
        <IslandAnimation />
        <img width={1000} src="../../../assets/look.png" alt="" />
      </div>
    </Layout>
  );
};

const Title = () => (
  <>
    <Typography variant="h4" component="h1">
      すべてのアプリ
    </Typography>
    <Typography css={cs.lhSmall} variant="subtitle1" component="span">
      デベロッパー アカウントでアクセスできるアプリやゲームがすべて表示されます。
    </Typography>
  </>
);

const TitleUnderline = styled.hr`
  opacity: 0.5;
  margin-bottom: 5rem;
`;

const FirstAppDetail = () => {
  const Container = styled.dl``;

  return (
    <Container>
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
    </Container>
  );
};
