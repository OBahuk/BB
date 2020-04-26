import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import { Provider } from 'react-redux';

import store from './redux/store';
import RequestForm from './components/RequestForm';
import Header from './components/Header';
import RequestsList from './components/RequestsList';
import RunControls from './components/RunControls';
import { RequestRunner } from './components/RequestRunner';

function App() {
    return (
        <Provider store={store}>
            <Page>
                <Header />
                <Grid>
                    <GridColumn>
                        <RequestForm />
                        <RequestsList />
                        <RunControls />
                    </GridColumn>
                    <GridColumn>
                        <RequestRunner />
                    </GridColumn>
                </Grid>
            </Page>
        </Provider>
    );
}

export default App;
