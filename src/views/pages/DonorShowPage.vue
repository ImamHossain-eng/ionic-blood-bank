<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>Donor Details Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>BG: {{ donor.blood_group }} Last Donated: {{ donor.last_date }} </ion-card-subtitle>
                    <ion-card-title> {{ donor.name }} </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    {{ donor.mobile }}
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>    
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,

} from '@ionic/vue'

import db from '../../db/firebaseinit.js'
import { doc, getDoc } from "firebase/firestore"; 


export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonCardContent,
    },
    data() {
        return {
            donor: {},
            donor_id: this.$route.params.id,
            pageDefaultBackLink: '/donor/list'
        }
    },
    async created() {
        const docRef = doc(db, "donors", this.donor_id);
        const donorDB = await getDoc(docRef);

        if (donorDB.exists()) {
            this.donor = donorDB.data()
            // console.log("Document data:", donorDB.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    
}
</script>