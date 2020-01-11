import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { MediaCard } from './MediaCard'
import { EnhancedTable } from './EnhancedTable'
import { WithToggleButton } from './WithToggleButton'

function TabPanel(props) {
  const drawerWidth = 240;
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(10),
  },
}));

export function YoutubeTabMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const entries = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container className={classes.root}>
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="MediaCard"     index={0} />
          <Tab label="EnhancedTable" index={1} />
          <Tab label="View Tgggle"   index={2} />
          <Tab label="Details"       index={3} />
          <Tab label="Item One" index={4} />
          <Tab label="Item One" index={5} />
          <Tab label="Item One" index={6} />
          <Tab label="Item One" index={7} />
          <Tab label="Item One" index={8} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <MediaCard entries={entries} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EnhancedTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <WithToggleButton entries={entries} />
        </TabPanel>

    </Container>
  );
}
