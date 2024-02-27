import type { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PerformanceCard from './PerformanceCard';

export default {
  title: 'Components/PerformanceCard',
  component: PerformanceCard,
  argTypes: {
    data: {
      control: 'object',
      description: 'Object containing the card data',
    },
    // Include more argTypes if necessary
  },
} as Meta<typeof PerformanceCard>;

const StoryTemplate: StoryFn<typeof PerformanceCard> = (args) => <PerformanceCard {...args} />;

export const Default = StoryTemplate.bind({});
Default.args = {
  data: {
    title: "Revenue",
    value: "$2,342",
    diff: 5.6,
    measure: "%",
  },
};

export const NegativeDiff = StoryTemplate.bind({});
NegativeDiff.args = {
  data: {
    title: "Expenses",
    value: "$1,200",
    diff: -2.3,
    measure: "%",
  },
};

// Note: You may need to adjust the types or provide additional props based on the `PerformanceCardProps`.
// Could you provide the complete TypeScript interface for `PerformanceCardProps` if there are more props than `data`?
