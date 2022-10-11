import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import { useRecoilValue } from "recoil";
import AutoSizer from "react-virtualized-auto-sizer";
import { CSSProperties, ForwardedRef, forwardRef } from "react";
import { islandList } from "../../../recoil/atoms/islandAtom";
import { IslandProps } from "../../../model/Island";

const GUTTER_SIZE = 50;
const COLUMN_WIDTH = 280;
const ROW_HEIGHT = 300;

export const IslandPage = () => {
  const items = useRecoilValue<Array<Array<IslandProps>>>(islandList);

  const Layout = styled.div`
    width: 100vw;
    height: 100vh;
  `;

  return (
    <Layout>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            className="Grid"
            itemData={items}
            columnCount={5}
            columnWidth={COLUMN_WIDTH + GUTTER_SIZE}
            rowCount={8}
            rowHeight={ROW_HEIGHT + GUTTER_SIZE}
            width={width}
            height={height}
            innerElementType={innerElementType}
          >
            {IslandCard}
          </Grid>
        )}
      </AutoSizer>
    </Layout>
  );
};

const innerElementType = forwardRef(({ style, ...rest }: { style: CSSProperties }, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    ref={ref}
    style={{
      ...style,
      paddingLeft: GUTTER_SIZE,
      paddingTop: GUTTER_SIZE,
    }}
    {...rest}
  />
));

const IslandCard = ({ data, rowIndex, columnIndex, style }: GridChildComponentProps<Array<Array<IslandProps>>>) => {
  const cell = data[rowIndex][columnIndex];
  const styles = {
    ...style,
    left: style.left || 0 + GUTTER_SIZE,
    top: style.top || 0 + GUTTER_SIZE,
    width: style.width || 0 - GUTTER_SIZE,
    height: style.height || 0 - GUTTER_SIZE,
  };

  const Avator = styled(({ className }: { className?: string | undefined }) => (
    <CardMedia className={className} component="img" image={cell.imageUrl} alt="green iguana" />
  ))`
    height: 150px;
  `;
  return (
    <Card style={styles}>
      <CardActionArea>
        <Avator />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cell.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cell.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
