import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const post = [];

function Feed() {
  return (
    <div>
      <div className="feed">feed</div>
      <PostCard />
    </div>
  );
}

export default Feed;
