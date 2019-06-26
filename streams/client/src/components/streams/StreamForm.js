import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {Segment, Button, Label, Form} from 'semantic-ui-react'

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <Label color='red' pointing>
                    {error}
                </Label>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        return(
            <Form.Field required>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </Form.Field>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Segment loading={this.props.loading} inverted>
                <Form  inverted onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Form.Group widths='equal'>
                        <Field name="title" component={this.renderInput} label="Enter Title" />
                        <Field name="description" component={this.renderInput} label="Enter Description"/>
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);