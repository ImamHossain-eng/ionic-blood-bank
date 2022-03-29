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
                    <ion-input v-model="blood_group" required></ion-input>    
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
                <ion-item>
                    <!-- <ion-label position="floating">Last Donate</ion-label> -->
                    <ion-button id="open-modal">Open Datetime Modal</ion-button>
                    <ion-modal trigger="open-modal" id="ion-modal">
                        <ion-content>
                            <ion-datetime v-model="date"
                            presentation="date"
                            @ionChange="pickDate()">
                            </ion-datetime>
                        </ion-content>
                    </ion-modal>
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
    IonDatetime,
    IonModal,
    IonContent,
} from '@ionic/vue'
import { format, parseISO } from 'date-fns'
import db from '../../db/firebaseinit.js'
import { collection, addDoc } from "firebase/firestore"


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
        IonDatetime,
        IonModal,
        IonContent,
    },
    data() {
        return {
            name: '',
            blood_group: '',
            mobile: '',
            last_date: '',
            date: ''
                        
        }
    },
    methods: {
        pickDate(){
            const datetime = this.date.toString()
            const date = datetime.substring(0, 10)
            console.log(date)
            this.last_date = date
            document.getElementById('ion-modal').didDismiss()
        },
        formatDate(value) {
            return format(parseISO(value), 'MMM dd yyyy');
        },
        async saveDonor(){
            const docRef = await addDoc(collection(db, "donors"), {
                name: this.name,
                blood_group: this.blood_group,
                mobile: this.mobile,
                last_date: this.last_date
            })
            console.log("Document written with ID: ", docRef.id);
            this.$router.replace('/donor/list')
            // await setDoc(doc(db, "donors", "LA"), {
            //     name: this.name,
            //     blood_group: this.blood_group,
            //     mobile: this.mobile,
            //     last_date: this.last_date
            // });
            // this.$router.replace('/donor/list')
            // db.collection('donors').add({
            //     name: this.name,
            //     blood_group: this.blood_group,
            //     mobile: this.mobile,
            //     last_date: this.last_date
            // })
            // .then(() => {
            //         this.$router.replace('/')
            // })
            // .catch(error => console.log(error))    
           
        },
        
    }
}
</script>