import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel } from '@ionic/react';
import './Home.css'; // Optional: Add styles for your home page

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Welcome to the App!</IonLabel>
        </IonItem>
        <IonButton expand="full" routerLink="/login">Go to Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;