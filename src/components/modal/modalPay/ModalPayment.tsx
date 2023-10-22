import React, { useState } from 'react';
import {Money, Trophy} from './../../icons'
import TabSelectPayment from '../../tabs/tabsPay/TabSelectPayment';
import TabConfirmPayment from '../../tabs/tabsPay/TabConfirmPayment';
import { ModalProps } from '../../../types';
import ModalTabs from '../modalTabs/ModalTabs';

const ModalPayment: React.FC<ModalProps> = ({ onClose }) => {
  const [tabsFinished, setTabsFinished] = useState(false);

  const tabs = [
    { title: 'Pago', icon: <Money fill="var(--white-color)" /> },
    { title: 'Confirmado', icon: <Trophy fill="var(--white-color)"/> },
  ];
  
  const contentComponents = [
    <TabSelectPayment />,
    <TabConfirmPayment tabsFinished={tabsFinished} setTabsFinished={setTabsFinished} onClose={onClose}/>,
  ];

  return <ModalTabs onClose={onClose} tabs={tabs} contentComponents={contentComponents} tabsFinished={tabsFinished} />;
};

export default ModalPayment;
