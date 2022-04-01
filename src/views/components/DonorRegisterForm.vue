<template>
    <ion-grid>
    <form @submit.prevent="saveDonor">
        <ion-row>
            <ion-col>
                <ion-item>
                    <ion-label position="floating">Donor Name</ion-label>
                    <ion-input v-model="name" required></ion-input>    
                </ion-item>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-item>
                    <ion-label position="floating">Blood Group</ion-label>
                    <ion-select v-model="blood_group" required>
                        <ion-select-option value="A+">A +</ion-select-option>
                        <ion-select-option value="A-">A -</ion-select-option>
                        <ion-select-option value="B+">B +</ion-select-option>
                        <ion-select-option value="B-">B -</ion-select-option>
                        <ion-select-option value="O+">O +</ion-select-option>
                        <ion-select-option value="O-">O -</ion-select-option>
                        <ion-select-option value="AB+">AB +</ion-select-option>
                        <ion-select-option value="AB-">AB -</ion-select-option>
                    </ion-select>   
                </ion-item>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-item>
                    <ion-label position="floating">Mobile Number</ion-label>
                    <ion-input v-model="mobile" required></ion-input>    
                </ion-item>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-button v-on:click="openDateModal()" color="primary" expand="full">Show Calendar</ion-button>
            </ion-col>
            <ion-col>
                <ion-label> {{ date }} </ion-label>
            </ion-col>
            <ion-col>
                
                <ion-item>
                    <ion-datetime 
                    v-if="isOpen" v-model="last_date"
                    @ionChange="closeDateModal()"
                    presentation="date"></ion-datetime>
                </ion-item>
            </ion-col>
        </ion-row>
        <ion-button expand="full" type="submit" color="primary">Save</ion-button>
    </form>
    </ion-grid>
</template>

<script>
import {
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    
} from '@ionic/vue'
// import { format, parseISO } from 'date-fns'
import db from '../../db/firebaseinit.js'
import { collection, addDoc } from "firebase/firestore"
import { format, parseISO } from 'date-fns';


export default {
    name: "DonorRegisterForm",
    components: {
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonSelect,
        IonSelectOption,
        IonDatetime,
    },
    data() {
        return {
            name: '',
            blood_group: '',
            mobile: '',
            last_date: '',
            date: '',
            isOpen: false
                        
        }
    },
    methods: {
        openDateModal(){
            // this.isOpen = !this.isOpen
            this.isOpen = true
        },
        closeDateModal(){
            const dateFromIonDatetime = this.last_date;
            const formattedString = format(parseISO(dateFromIonDatetime), 'MMM d, yyyy');
            this.date = formattedString
            this.isOpen = false
        },
        async saveDonor(){
            const docRef = await addDoc(collection(db, "donors"), {
                name: this.name,
                blood_group: this.blood_group,
                mobile: this.mobile,
                last_date: this.date
            })
            console.log("Document written with ID: ", docRef.id);
            this.$router.replace('/donor/list')  
        },
        
    }
}
</script>

<style scoped>
.hide{
    visibility: hidden;
}

</style>