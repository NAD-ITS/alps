import React from "react";
import {Form} from "../elements/Form";
import {TextField} from "../elements/TextField";
import {OptionGroup} from "../elements/OptionGroup";
import RadioButton from "../elements/RadioButton";
import {Button} from "../../../components/button/Button";

export interface SubscribeFormProps {
    cancelLabel?: string,
    darkMode?: boolean,
    onCancel?: () => void,
    onSubmit?: () => void,
    submitLabel?: string,
    title?: string,
}

export const SubscribeForm = ({
                                  cancelLabel = "Cancel",
                                  darkMode = true,
                                  onCancel,
                                  onSubmit,
                                  submitLabel = "Submit",
                                  title = "Subscribe",
                              }: SubscribeFormProps): JSX.Element => {
    return (
        <Form
            className={"u-padding u-spacing"}
            title={title}
            darkMode={darkMode}
            onSubmit={onSubmit}
            labelPosition="top"
        >
            <TextField
                label="First Name"
                name="first_name"
                placeholder="First Name"
            />
            <TextField label="Last Name" name="last_name" placeholder="Last Name"/>
            <TextField
                type="email"
                label="Email Address"
                name="email"
                placeholder="Email Address"
            />
            <TextField
                type="textarea"
                label="Comments"
                name="comments"
                placeholder="Place some comments here"
                labelOptional="Optional"
            />
            <OptionGroup title="Frequency">
                <RadioButton
                    checked={true}
                    id="weekly"
                    label="Weekly Bulletin"
                    name="frequency"
                    value="weekly"
                />
                <RadioButton
                    id="seasonal"
                    label="Seasonal Bulletin"
                    name="frequency"
                    value="seasonal"
                />
            </OptionGroup>
            <Button label={submitLabel} outline/>
            <Button icon="close" label={cancelLabel} onClick={onCancel} simple/>
        </Form>
    )
}
