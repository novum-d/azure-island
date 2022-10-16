import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { GridChildComponentProps } from "react-window";
import { IslandProps } from "../../../model/Island";
import { SytledProps } from "../../../utils/types/StyledProps";
import { Grid } from "./consts/Grid";

export const IslandCard = ({ data, rowIndex, columnIndex, style }: GridChildComponentProps<IslandProps[][]>) => {
  const cell = data[rowIndex][columnIndex];
  const styles = {
    ...style,
    left: Number(style.left) + Grid.GUTTER_SIZE,
    top: Number(style.top) + Grid.GUTTER_SIZE,
    width: Number(style.width) - Grid.GUTTER_SIZE,
    height: Number(style.height) - Grid.GUTTER_SIZE,
  };

  const Avator = styled(({ className }: SytledProps) => (
    <CardMedia className={className} component="img" image={cell.imageUrl} alt={cell.name} />
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
