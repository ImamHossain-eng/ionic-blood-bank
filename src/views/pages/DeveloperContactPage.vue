<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Developer Contact Information</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-img :src="'assets/imam_hossain.jpg'"></ion-img>
                <ion-card-content>
                    <ion-card-title>MD. IMAM HOSSAIN</ion-card-title>
                    <ion-card-subtitle> Assistant Officer (IT)</ion-card-subtitle>
                    <ion-row>
                        <ion-col>
                            <a href="https://github.com/ImamHossain-eng"><ion-icon :icon="logoGithub"></ion-icon></a>
                        </ion-col>
                        <ion-col>
                            <a href="https://www.facebook.com/profile.php?id=100009238441500"><ion-icon :icon="logoFacebook"></ion-icon></a>
                        </ion-col>
                        <ion-col>
                            <a><ion-icon :icon="logoTwitter"></ion-icon></a>
                        </ion-col>
                        <ion-col>
                            <a><ion-icon :icon="logoWhatsapp"></ion-icon></a>
                        </ion-col>
                        <ion-col>
                            <a><ion-icon :icon="logoInstagram"></ion-icon></a>
                        </ion-col>
                    </ion-row>
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
    IonMenuButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonRow,
    IonCol,
    IonImg,
    IonIcon,

} from '@ionic/vue'
import {
    logoFacebook,
    logoGithub,
    logoTwitter,
    logoWhatsapp,
    logoInstagram,
} from 'ionicons/icons'
export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonTitle,
        IonContent,
        IonCard,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
        IonRow,
        IonCol,
        IonImg,
        IonIcon,
    },
    data () {
        return {
            logoFacebook,
            logoGithub,
            logoTwitter,
            logoWhatsapp,
            logoInstagram,
        }
    }
    
}
</script>

<style scoped>
ion-icon{
    font-size: 40px;
}
</style>