import { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: {action: "clicked"},
    variant: {
        control: {
            type: "select",
            options: ["primary", "secondary", "danger"]
        }
    }
  }
};

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: "Primary Button",
        variant: "primary"
    }
};

export const Secondary: Story = {
    args: {
        children: "Mark Complete",
        variant: "secondary",
    }
};

export const Danger: Story = {
    args: {
        children: "Delete",
        variant: "danger"
    }
}

export const Disabled: Story = {
    args: {
        children: "Disabled Button",
        variant: "primary",
        disabled: true
    }
}
