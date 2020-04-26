import React from 'react';
import Button from '@atlaskit/button';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, GridColumn } from './Styled';
import { runRequests, stopRequests } from '../redux/actions';
import {AppState} from "../types";


export default () => {
    const dispatch = useDispatch();
    const {inProgress, requests} = useSelector((state: AppState) => state);

    const runQueue = () => dispatch(runRequests());
    const stopQueue = () => dispatch(stopRequests());

    return (
        <Grid>
            <GridColumn/>
            <GridColumn>
                <Button appearance="primary" onClick={runQueue} isDisabled={inProgress || !requests.length}>
                    Run
                </Button>
            </GridColumn>
            <GridColumn>
                <Button appearance="primary" onClick={stopQueue} isDisabled={!inProgress}>
                    Stop
                </Button>
            </GridColumn>
        </Grid>
    );
};
