import React from 'react';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function Video1(props) {
  const content = {
    'url': 'https://www.youtube.com/watch?v=5qap5aO4i9A',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={8} pb={12} textAlign="center">
          <Box mb={9}>
            <Container maxWidth="sm">
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">Product tour</Typography>
                <Typography variant="h3" component="span"> for you to get familiar with us</Typography>
              </Typography>
            </Container>
          </Box>

          <Grid container spacing={2} justify="center">
            <ReactPlayer
              url={content['url']}
              controls
              width="50vw"
              height="50vh"
            />
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
