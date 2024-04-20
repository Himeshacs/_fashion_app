import Card from "@mui/material/Card";
import style from "./ClothingCard.module.scss";
import { ClothingCardTypes } from "../../types/types";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const ClothingCard: React.FC<ClothingCardTypes> = ({
  title,
  image,
  category,
  priceSymbol,
  price,
  description,
}) => {
  return (
    <Card className={style.cardStyle}>
      <CardHeader classes={{ title: style.cardTitleStyle }} title={title} />
      <CardActionArea>
        <CardMedia image={image} className={style.cardMediaStyle} />
        <CardContent
          className={style.cardContentStyle}
          data-category={category}
        >
          <Typography className={style.cardPriceStyle}>
            {priceSymbol} {price}
          </Typography>
          <Typography className={style.cardDescriptionStyle}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
