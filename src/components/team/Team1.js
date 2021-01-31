import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2)
  },
}));

export default function Team(props) {
  const classes = useStyles();

  const content = {
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={8} pb={12} textAlign="center">
          <Box mb={9}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary" paragraph={true}>{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Container>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['01_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['01_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['01_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['01_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['01_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['02_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['02_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['02_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['02_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['02_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['03_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['03_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['03_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['03_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['03_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['04_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['04_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['04_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['04_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['04_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['05_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['05_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['05_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['05_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['05_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['06_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['06_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['06_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['06_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['06_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['07_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['07_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['07_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['07_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['07_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['08_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['08_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['08_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['08_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['08_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar alt="" src={content['09_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['09_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['09_job']}</Typography>
              <Box ml="auto" className={classes.iconsBoxRoot}>
                <IconButton color="inherit" aria-label="GitHub" onClick={() => window.open(content['09_github'], "_blank")}>
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" onClick={() => window.open(content['09_linkedin'], "_blank")}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
