import { useEffect, useMemo } from 'react';
import './ExploreContainer.css';
import {
  BrowserVault,
  DeviceSecurityType,
  IdentityVaultConfig,
  Vault,
  VaultType,
} from '@ionic-enterprise/identity-vault';
import { Capacitor } from '@capacitor/core';
import { IonButton } from '@ionic/react';

interface ContainerProps { }


const config: IdentityVaultConfig = ({
  key: 'io.ionic.get-keys',
  type: VaultType.SecureStorage,
  deviceSecurityType: DeviceSecurityType.None,
  lockAfterBackgrounded: 2000,
  shouldClearVaultAfterTooManyFailedAttempts: true,
  customPasscodeInvalidUnlockAttempts: 2,
  unlockVaultOnLoad: false,
});

const ExploreContainer: React.FC<ContainerProps> = () => {

  const vault = useMemo(() => {
    return Capacitor.getPlatform() === 'web' ? new BrowserVault(config) : new Vault(config);
  }, []);

  const setData = async () => {
    await vault.setValue('uniqueKey', 'data');
  }

  const getKeys = async () => {
    const keys = await vault.getKeys();
    console.log(keys)
  }

  const clearVault = async () => {
    await vault.clear();
  }

  return (
    <div id="container">
      <IonButton onClick={setData}>Set Vault Data</IonButton>
      <IonButton onClick={getKeys}>Get Keys</IonButton>
      <IonButton onClick={clearVault}>Clear Vault</IonButton>
    </div>
  );
};

export default ExploreContainer;
