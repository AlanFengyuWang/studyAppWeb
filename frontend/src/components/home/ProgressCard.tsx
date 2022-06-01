import React, { useEffect } from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import styles from "../../styles/progressCard.module.css";
interface IProps {
  timeType: string;
  progress: number;
}

const ProgressCard: React.FC<IProps> = ({ timeType, progress }) => {
  // Progress decide the color
  const [color, setColor] = React.useState<string>("#C53030");

  useEffect(() => {
    if (progress < 50) {
      setColor("#C53030");
    } else if (progress < 75) {
      setColor("#D69E2E");
    } else {
      setColor("#48BB78");
    }
  }, [progress]);

  return (
    <div className={styles.progressCard}>
      <Text
        textAlign="left"
        marginLeft="4%"
        paddingTop="3%"
        color="#474444"
        fontWeight={600}
      >
        {timeType}, I have achieved:{" "}
      </Text>
      <CircularProgress
        value={progress}
        color={color}
        size="40vw"
        thickness={5}
      >
        <CircularProgressLabel style={{ color: `${color}`, fontWeight: "700" }}>
          {progress}%
        </CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default ProgressCard;
