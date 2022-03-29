<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>HUB Blood Bank</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <p>Contents Area.</p>
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue'
export default {
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton
    }
    
}
</script>