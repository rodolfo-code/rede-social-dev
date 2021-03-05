import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const post = [
  { id: 1,
    autor: {
      id: 1,
      name: 'Rodolfo Oliveira',
      username: 'rodolfo',
      avatar: '/images/avatars/avatar_1.jpeg',
    },      
    title: "Criando um App do zero utilizando ReactJs",
    date: "April 7, 2020",
    description: "Fala pessoal, qual framework favorito de vcs?",
    hashtags: "#dotnet, #javascript, #reactjs, #developers" ,
    images: "/images/posts/post1.png",
  },
  { id: 2,
    autor: {
      id: 1,
      name: "Rodolfo Oliveira",
      username: "rodolfovini",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Comparativo entre React.js e Vue.js - Performance",
    date: "April 1, 2020",
    description: "Quero criar um bootcamp para passar um pouco da minha experiencia pra vcs! Quem topa?",
    hashtags: "#framwork, #javascript, #reactjs, #vue",
    images: "/images/posts/post2.png",
  }
];

function Feed() {
  const classes = useStyles();
  return (
    <div>
      {post.map(post => (
        <PostCard key={post.id}>{post.description}</PostCard>
      ))}
      <PostCard />
    </div>
  );
}

export default Feed;
