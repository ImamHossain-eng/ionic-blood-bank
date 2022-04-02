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
            <h4 class="hub">Hamdard University Bangladesh</h4>

            <home-slider></home-slider>



                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.3707078549696!2d90.61738044956421!3d23.598051100423035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37544d2890d5c195%3A0x9c93fd428ace86e9!2sHamdard%20University%20Bangladesh!5e1!3m2!1sen!2sbd!4v1648842135436!5m2!1sen!2sbd" width="600" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue'
import HomeSlider from '../components/HomeSlider.vue'
export default {
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, HomeSlider,
    }
    
}
</script>

<style scoped>
.hub{
    text-align: center;
    padding: 1em;
    background-color: var(--ion-color-primary);
    color: #EFEFEF;
}

</style>