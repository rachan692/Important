import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Card, List, ListItem, Typography, Button } from '@material-tailwind/react';
import { Playdialog } from '../components/Playdialog';

const Home = () => {
  const nav = useNavigate();
  
  // Fetching posts from Redux state
  const { post } = useSelector((state) => state.blogslice);
  
  // If no posts are available, show a message
  if (post.length === 0) {
    return <h1 className='text-2xl font-bold p-3 text-red-500'>Add some blogs</h1>;
  }

  return (
    <div className='p-4 max-w-[700px]'>
      <Card className="w-96">
        <List>
          {post.map((postItem, i) => (
            <ListItem key={postItem.id}>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {postItem.title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  {postItem.description}
                </Typography>
              </div>
              <div className='flex gap-x-4'>
                <Button
                  onClick={() => nav(`edit-form/${postItem.id}`)}
                  size='sm' 
                  color='green'>
                  Edit
                </Button>
                {/* <Button size='sm' color='red'></Button> */}
                <Playdialog index={i} />
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default Home;
