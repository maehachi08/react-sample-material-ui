import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { MediaCard } from './MediaCard'
import { EnhancedTable } from './EnhancedTable'

const useStyles = makeStyles(theme => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));


export function WithToggleButton(props) {
  const classes = useStyles();

  // function componentでstateを定義する方法
  // https://ja.reactjs.org/docs/hooks-state.html
  const [cardView, setCardView] = useState(true);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={12} md={12} align='right'>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup
              exclusive
              onChange={() => {
                setCardView(!cardView);
              }}
              aria-label="text alignment"
            >
              <ToggleButton value="view" aria-label="view module">
                <ViewModuleIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </Grid>
      {cardView ? (
        <MediaCard entries={props.entries} />
      ) : (
        <EnhancedTable entries={props.entries} />
      )}
    </div>
  );
}
