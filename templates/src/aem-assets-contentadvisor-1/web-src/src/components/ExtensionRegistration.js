/*
 * <license header>
 */

import React from 'react';
import { Text } from '@adobe/react-spectrum';
import { register } from '@adobe/uix-guest';
import { extensionId } from './Constants';

function ExtensionRegistration() {
  const init = async () => {
    const guestConnection = await register({
      id: extensionId,
      methods: {
        // APIs to be populated here

        
      },
    });
  };
  init().catch(console.error);

  return <Text>IFrame for integration with Host (AEM Assets Content Advisor)...</Text>;
}

export default ExtensionRegistration;
