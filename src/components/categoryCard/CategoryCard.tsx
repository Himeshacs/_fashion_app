import Card from "@mui/material/Card";
import styles from "./Category.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { CategoryCardTypes } from "../../types/types";
import CardContent from "@mui/material/CardContent";

export const CategoryCard: React.FC<CategoryCardTypes> = ({ title }) => {
  return (
    <Card className={styles.cardStyle} data-category={title}>
      <CardContent>
        <RouterLink
          to={`/products/${title.toLowerCase()}`}
          className={styles.cardTitleStyle}
        >
          {title}
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
