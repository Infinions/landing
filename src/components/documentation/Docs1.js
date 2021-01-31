import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import BusinessIcon from '@material-ui/icons/Business';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
  },
}));


function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <li>
      <a href={to} target="_blank">
        <ListItem button>{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </a>
    </li>
  );
}


export default function Docs1(props) {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">Documentation</Typography>
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={2} justify="center">
            <List aria-label="main mailbox folders">
              <ListItemLink to="https://github.com/Infinions/Infinions/tree/main/reports/TechnicalReport.pdf" primary="Infin - Technical Report" icon={<DescriptionIcon />} />
              <ListItemLink to="https://github.com/Infinions/Infinions/tree/main/reports/BusinessCase.pdf" primary="Infin - Business Case Report" icon={<BusinessIcon />} />
              <ListItemLink to="https://github.com/Infinions/Infinions/tree/main/reports/FinancialAnalysis.xlsm" primary="Infin - Financial Model Business Plan" icon={<AccountBalanceIcon />} />
            </List>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
