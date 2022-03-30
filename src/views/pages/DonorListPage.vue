<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Donor Lists</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-row>
                    <ion-col>
                        <ion-item>
                            <!-- <ion-label position="floating">Search by Blood Group</ion-label> -->
                            <!-- <ion-input v-model="search"></ion-input>   -->
                            <ion-searchbar v-model="search" color="primary" show-cancel-button="focus"></ion-searchbar> 
                        </ion-item> 
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-item v-for="donor in filterDonors" v-bind:key="donor.id">
                            <ion-label>{{donor.name}} : {{donor.blood_group}}</ion-label>
                            <ion-button :router-link="`/donor/${donor.id}`">
                            <ion-icon :icon="eyeOutline"></ion-icon>
                            </ion-button>
                        </ion-item>
                    </ion-col>
                </ion-row>
            </ion-list>
        </ion-content>
    </ion-page>    
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonRow,
    IonCol,
    IonButton,
    IonSearchbar,
    IonIcon
} from '@ionic/vue'

import { eyeOutline } from 'ionicons/icons'

import db from '../../db/firebaseinit'
import { collection, getDocs } from "firebase/firestore"; 


export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonRow,
        IonCol,
        IonButton,
        IonSearchbar,
        IonIcon
    },
    data() {
        return {
            donors: [],
            search: '',
            eyeOutline
        }
    },
    async created() {
        const querySnapshot = await getDocs(collection(db, "donors"));
        querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots
        const data = {
            'id': doc.id,
            'name': doc.data().name,
            'blood_group': doc.data().blood_group,
            'last_date': doc.data().last_date
        }
        this.donors.push(data)
        // console.log(doc.id, " => ", doc.data());
        }); 
    },
    computed: {
        filterDonors: function() {
            return this.donors.filter((donor) => {
                // return donor.blood_group.match(this.search) || donor.name.match(this.search)
                return donor.blood_group.toLowerCase().match(this.search.toLowerCase())
            })
        }
    }


    
}
</script>