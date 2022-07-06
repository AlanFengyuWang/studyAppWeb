import React, { useEffect } from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  position,
  Text,
} from "@chakra-ui/react";
import styles from "../../../styles/progressCard.module.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value: number) => {
          const roundedValue = Math.round(value);
          return (
            <Box
              style={{
                width: 150,
                height: 220,
                margin: "0 auto",
                position: "relative",
                top: "3vw",
              }}
            >
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                styles={buildStyles({ pathTransition: "none" })}
              />
            </Box>
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
};

export default ProgressCard;
