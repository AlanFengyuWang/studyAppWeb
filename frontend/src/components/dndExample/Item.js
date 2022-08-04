import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Item({ item, index, getItemStyle }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {item.content}
        </Box>
      )}
    </Draggable>
  );
}
