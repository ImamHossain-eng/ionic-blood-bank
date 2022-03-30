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
                    <ion-label position="floating">Date</ion-label>
                    <ion-input v-model="date" required></ion-input>  
                </ion-item>    
                

<!-- <ion-item>
    <ion-button fill="clear" id="open-date-input-2">
      <ion-icon icon="calendar" /> hsh
    </ion-button>
    <ion-popover trigger="open-date-input-2" :show-backdrop="false">
      <ion-datetime v-model="date"
        presentation="date"
        @ionChange="pickDate()"
      />
    </ion-popover>
  </ion-item> -->



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
    
} from '@ionic/vue'
// import { format, parseISO } from 'date-fns'
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
    },
    data() {
        return {
            name: '',
            blood_group: '',
            mobile: '',
            last_date: '',
            date: '',
                        
        }
    },
    methods: {
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

<style scoped>
.hide{
    visibility: hidden;
}

</style>