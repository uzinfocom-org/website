import React, { memo } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SandGlassIcon from "./Icons/SandGlassIcon";

const TimeToRead = ({ time }) => {
  return (
    <Box display="flex" alignItems="center" mr={1}>
      <Box mr={0.5} lineHeight={1}>
        <SandGlassIcon fontSize="small" />
      </Box>
      <Typography variant="caption">{time} daqiqada o'qiladi</Typography>
    </Box>
  );
};

export default memo(TimeToRead);
