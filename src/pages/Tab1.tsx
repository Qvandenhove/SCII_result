import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonDatetime, IonList } from '@ionic/react';
import Match from '../components/match';
import helpers from "../helpers/helpers";
import './Tab1.css';

let data_get:boolean = false
const Tab1: React.FC = () => {
  const currentDate = new Date()
  const [selectedDate, setSelectedDate] = useState(currentDate.toString())
  const [Matchs, setMatchs] = useState([])
  useEffect(() => {
    helpers.getMatchs().then((value: any) => {
      if(!data_get){
        setMatchs(value)
        console.log(value)
        data_get = true
      }
    })
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes matchs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="stacked">Séléctionnez une date</IonLabel>
          <IonDatetime displayFormat="DD/MM" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>
        <IonList inset lines="inset">
          {Matchs.map((match : any) => 
          <IonItem key={match.id}>
            <Match player1={match.player1} player2={match.player2} score={match.result}/>
          </IonItem>
          )}
         
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
