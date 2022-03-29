<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Search Blood Donors</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-row>
                <ion-col>
                    <ion-item>
                        <ion-label position="floating">Search by Blood Group</ion-label>
                        <ion-input v-model="search"></ion-input>   
                    </ion-item> 
                    
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>
<script>
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButtons, 
    IonMenuButton,
    IonRow,
    IonCol,
    IonItem,
    IonLabel, 
    IonInput
} from '@ionic/vue'
export default {
    components: {
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent, 
        IonButtons, 
        IonMenuButton, 
        IonRow,
        IonCol,
        IonItem,
        IonLabel, 
        IonInput
    },
    date() {
        return {
            search: 'all'
        }
    }
    
}
</script>