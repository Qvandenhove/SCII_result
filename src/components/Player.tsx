import React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react'
interface playerProps {
    'nickname': string;
    'first_name': string;
    'last_name': string;
    'main_race': string;
}

const Player: React.FC<playerProps> = ({nickname, first_name, last_name, main_race}) => {
    return (
        <IonCard>
            <IonCardHeader><IonCardTitle>{nickname}</IonCardTitle></IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle>{first_name} {last_name}</IonCardSubtitle>
                {main_race}
            </IonCardContent>
        </IonCard>
    )
}

export default Player