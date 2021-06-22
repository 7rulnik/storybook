import React, { FC } from 'react';
import { TabsBar } from '../../TabsBar/TabsBar';
import { TabItem } from '../../TabsBar/TabItem';
import { ArgsTable, ArgsTableProps, SortType } from './ArgsTable';

export interface TabbedArgsTableProps {
  tabs: Record<string, ArgsTableProps>;
  sort?: SortType;
}

export const TabbedArgsTable: FC<TabbedArgsTableProps> = ({ tabs, ...props }) => {
  const entries = Object.entries(tabs);

  if (entries.length === 1) {
    return <ArgsTable {...entries[0][1]} {...props} />;
  }

  return (
    <TabsBar>
      {entries.map((entry) => {
        const [label, table] = entry;
        const id = `prop_table_div_${label}`;
        return (
          <TabItem key={id} id={id} title={label}>
            <ArgsTable key={`prop_table_${label}`} {...table} {...props} />
          </TabItem>
        );
      })}
    </TabsBar>
  );
};
