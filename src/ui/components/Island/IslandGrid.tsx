import { CSSProperties, ForwardedRef, forwardRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid } from "react-window";
import { IslandProps } from "../../../model/Island";
import { Grid } from "./consts/Grid";
import { IslandCard } from "./IslandCard";

export const IslandGrid = ({ items }: { items: IslandProps[][] }) => (
  <AutoSizer>
    {({ height, width }) => (
      <FixedSizeGrid
        className="Grid"
        itemData={items}
        columnCount={Grid.COLUMN_COUNT}
        columnWidth={Grid.COLUMN_WIDTH + Grid.GUTTER_SIZE}
        rowCount={Grid.ROW_COUNT}
        rowHeight={Grid.ROW_HEIGHT + Grid.GUTTER_SIZE}
        width={width}
        height={height}
        innerElementType={innerElementType}
      >
        {IslandCard}
      </FixedSizeGrid>
    )}
  </AutoSizer>
);

const innerElementType = forwardRef(({ style, ...rest }: { style: CSSProperties }, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    ref={ref}
    style={{
      ...style,
      paddingLeft: Grid.GUTTER_SIZE,
      paddingTop: Grid.GUTTER_SIZE,
    }}
    {...rest}
  />
));
