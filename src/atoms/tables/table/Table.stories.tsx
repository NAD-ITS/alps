import {Meta, Story} from "@storybook/react";
import data from '../Table.stories.json'
import React from "react";
import {Table, TableProps} from "./Table";

export default {
    title: "atoms/Tables/Table",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Table,
    argTypes: {
        title: {
            defaultValue: "Title for table",
            control: {type: "text"}
        },
        columns: {
            defaultValue: data.table1.columns,
            control: {type: "object"}
        },
        rows: {
            defaultValue: data.table1.rows,
            control: {type: "object"}
        },
    },
} as Meta;

const Template: Story<TableProps> = (args) =>
    <Table {...args} />

export const Basic = Template.bind({});

export const with_border = Template.bind({});
with_border.args = {
    withBorder: true
}

export const Slim = Template.bind({});
Slim.args = {
    withBorder: true,
    slim: true
}