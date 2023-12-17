import { FC } from 'react';

import { TabItem, TabsStyled } from './style';

interface Props {
  tabs: string[];
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

const Tabs: FC<Props> = ({ tabs, activeTab, onSelectTab }) => {
  return (
    <TabsStyled>
      {tabs.map((tab) => (
        <TabItem 
          onClick={() => onSelectTab(tab)} 
          isActive={tab === activeTab} 
          key={tab}
        >
          {tab}
        </TabItem>
      ))}
    </TabsStyled>
  );
};

export default Tabs;
