import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Player from '../components/Player';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Player first_name="Clement" last_name="Desplanches" nickname="Clem" main_race="Terran" />
        <Player first_name="Théo" last_name="Freydière" nickname="PtitDrogo" main_race="Protoss" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
