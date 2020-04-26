import React from 'react';
import PageHeader from '@atlaskit/page-header';
import styled from 'styled-components';
import { Reset } from '@atlaskit/theme';

const HeaderText = styled.div`
  text-align: center;
  padding: .5rem;
  background: #0052CC;
  font-size: 2em;
  margin-bottom: 2em;
`;

export default () => (
    <HeaderText>
        <PageHeader >
            <Reset style={{background: '#0052CC', color: '#ffffff'}}>
                REQUEST SIMULATOR
            </Reset>
        </PageHeader>
    </HeaderText>
);