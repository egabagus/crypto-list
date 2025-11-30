import { CryptoService } from "@/services/CryptoService";
import { CryptoTicker } from "@/type/crypto.type";
import { ref } from "vue";

export function useGetCrypto() {
    const data = ref<CryptoTicker[]>([]);
    const error = ref<string | null>(null);
    const loading = ref<boolean>(false);

    const getCryptoData = async () => {
        error.value = null;
        loading.value = true;

        try {
            const response = await CryptoService.getTickers();
            data.value = response.data;
        } catch (err) {
            console.error("Error in useGetCrypto:", err);
            error.value = "Failed to fetch cryptocurrency data.";

            throw err;
        } finally {
            loading.value = false;
        }
    };

    return {
        data,
        error,
        loading,
        getCryptoData
    };
}