import React from 'react';
import { useDispatch } from 'react-redux';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import FieldText from '@atlaskit/field-text';

import { Grid, GridColumn } from './Styled';
import  { addRequest } from '../redux/actions';

interface FormData {
    name: string,
    delay: string
}

export default () => {
    const dispatch = useDispatch();
    const submitHandler = (data: FormData, form: any): void => {
        const payload = {
            name: data.name,
            delay: Number(data.delay) * 1000
        };
        dispatch(addRequest(payload));
    };

    return (
        <Form onSubmit={submitHandler} >
            {({formProps}) => {
                return (
                <>
                <form {...formProps} >
                    <Grid>
                        <GridColumn>
                            <Field name="name" defaultValue="">
                                {({fieldProps}) => {
                                    return (
                                    <FieldText
                                        {...fieldProps}
                                        label="Request name"
                                        maxLength={20}
                                        required
                                    />
                                )}}
                            </Field>
                        </GridColumn>
                        <GridColumn>
                            <Field name="delay" defaultValue="3">
                                {({fieldProps}) => (
                                    <FieldText
                                        {...fieldProps}
                                        type="number"
                                        label="Delay (sec)"
                                        required
                                        min={0}
                                        max={10}
                                    />
                                )}
                            </Field>
                        </GridColumn>
                        <GridColumn>
                            <Button appearance="primary" type="submit" >
                                Add
                            </Button>
                        </GridColumn>
                    </Grid>
                </form>
                </>
            )
            }}
        </Form>
    );
};
