import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { IslandProps } from "../../../model/Island";
import { islandList } from "../../../recoil/atoms/islandAtom";
import { IslandGrid } from "../../components/Island/IslandGrid";

export const IslandPage = () => {
  const items = useRecoilValue<IslandProps[][]>(islandList);

  return (
    <IslandPageLayout>
      <IslandGrid items={items} />
    </IslandPageLayout>
  );
};

const IslandPageLayout = styled.div`
  width: 100%;
  height: 100vh;
`;
