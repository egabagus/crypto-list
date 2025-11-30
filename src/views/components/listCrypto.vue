<template>
    <div class="text-center btn-refresh">
        <ion-button mode="ios" @click="loadData">Refresh</ion-button>
    </div>

    <div v-if="loading" class="text-center w-full">
        <ion-item>
            <ion-spinner/>
        </ion-item>
    </div>

    <div>
        <ion-card style="background-color: #2b2b2b; padding: 10px;">
            <ion-list style="width: 100%;">
                <ion-item v-for="crypto in data" :key="crypto.id">
                    <ion-grid>
                        <ion-row>
                            <ion-col class="text-center" size="auto">
                                <div style="width: 80px;">Rank</div>
                                <div>{{ crypto.rank }}</div>
                            </ion-col>
                            <ion-col>
                                <div>{{ crypto.name }}</div>
                                <div>{{ crypto.symbol }}</div>
                            </ion-col>
                            <ion-col>
                                <div>USD</div>
                                <div>${{ crypto.price_usd }}</div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </ion-list>
        </ion-card>
    </div>
</template>

<script setup lang="ts">
import { useGetCrypto } from '@/composable/useGetCrypto';
import { IonButton, IonList, IonItem, IonGrid, IonRow, IonCol, IonCard, IonSpinner } from '@ionic/vue';
import { onMounted } from 'vue';

const { data, loading, getCryptoData } = useGetCrypto();

onMounted(() => {
    loadData();
});

const loadData = async () => {
    await getCryptoData();
};
</script>

<style scoped>
.text-center {
    text-align: center;
}

.btn-refresh {
    margin-top: 20px;
}

.w-full {
    width: 100%;
}

</style>