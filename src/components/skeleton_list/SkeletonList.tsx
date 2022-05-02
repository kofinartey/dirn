import React from "react";
import { useAppSelector } from "../../utils/redux";

import { Skeleton } from "@mui/material";
import SkeletonStyles from "./SkeletonStyles";

function SkeletonList() {
  const classes = SkeletonStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);

  return (
    <div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
      <div className={classes.skeleton}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={85}
          sx={{ bgcolor: darkTheme ? "#1e2139" : "grey.200" }}
        />
      </div>
    </div>
  );
}

export default SkeletonList;
