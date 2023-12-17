import { FC, useCallback, useState } from 'react';

import { ModalName } from '../../types/Modal';
import Profile from './Profile';
import Modal from '../../components/shared/Modal';

enum Tabs {
  Profile = 'Profile',
  Account = 'Account',
}

const availableTabs = Object.values(Tabs);

const ProfileEditModal: FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs | string>(availableTabs[0]);

  const selectTabHandler = (tab: string) => setActiveTab(tab);

  const renderContent = useCallback(() => {
    switch (activeTab) {
    case Tabs.Profile:
      return <Profile />;
  
    case Tabs.Account:
      return <div>Account</div>;
  
    default:
      return null;
    }
  }, [activeTab]);

  return (
    <Modal
      modalName={ModalName.profile} 
      headerTitle="Profile Edit" 
      tabs={availableTabs}
      activeTab={activeTab}
      onSelectTab={selectTabHandler}
    >
      {renderContent()}
    </Modal>
  );
};

export default ProfileEditModal;
