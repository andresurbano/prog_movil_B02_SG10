import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel
} from '@ionic/react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar lógica de inicio de sesión
    console.log('Login intentado', { email, password });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Correo Electrónico</IonLabel>
          <IonInput 
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            type="email"
            placeholder="Ingresa tu correo"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Contraseña</IonLabel>
          <IonInput 
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            type="password"
            placeholder="Ingresa tu contraseña"
          />
        </IonItem>
        <IonButton 
          expand="block" 
          onClick={handleLogin}
          className="ion-margin-top"
        >
          Iniciar Sesión
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
