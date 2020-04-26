import React from 'react';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import Button from '@atlaskit/button';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, GridColumn } from './Styled';
import { AppState, Request } from '../types';
import  { removeRequest } from '../redux/actions';

export default () => {
    const requests: Request[] = useSelector((state: AppState) => state.requests);
    const dispatch = useDispatch();

    const removeBtnHandler = (request: Request) => dispatch(removeRequest(request));

    return (
        <>
        {
            requests.map(item => (
                <Grid key={item.id}>
                    <GridColumn>{item.name}</GridColumn>
                    <GridColumn>{item.delay}</GridColumn>
                    <GridColumn>
                        <Button onClick={() => removeBtnHandler(item)}><TrashIcon label=""/></Button>
                    </GridColumn>
                </Grid>
            ))
        }
        </>
    )
}