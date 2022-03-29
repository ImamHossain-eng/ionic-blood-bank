<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Donor Registration</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <donor-register-form></donor-register-form>
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue'
import DonorRegisterForm from '../components/DonorRegisterForm.vue'

export default {
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton,
        DonorRegisterForm
    }
    
}
</script>
        