<template>
    <!--SETTINGS MODAL-->
    <b-modal id="settings-modal" title="Settings">
        <b-form-group label="Currency">
            <b-form-radio-group
                    id="select-type"
                    class="my-1 w-100"
                    :options="[{text: 'LEI', value: 'Lei'}, {text: 'Euro', value: '€'}]"
                    v-model="currency"
                    buttons
                    button-variant="outline-dark"
                    size="sm"
                    name="radios-btn-outline"
            ></b-form-radio-group>
        </b-form-group>
        <template slot="modal-footer" slot-scope="{ ok, cancel }">
            <b-button variant="outline-success" @click="saveSettings(), ok()"><font-awesome-icon icon="check" /></b-button>
            <b-button variant="outline-danger" @click="logout(), cancel()">Logout</b-button>
        </template>
    </b-modal>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';


    export default {
        name: "Settings",
        computed: {
            ...mapGetters(["getCurrency"]),
        },
        data(){
            return {
                currency: ''
            }
        },
        methods: {
            ...mapActions(["setCurrency"]),

            saveSettings(){
                localStorage.setItem('vSpendCurrency', `${this.currency}`);
                this.setCurrency(this.currency);
            },

            logout(){
                localStorage.setItem('vSpendCollection', '');
                localStorage.setItem('vSpendUserName', '');
                location.reload();
            }
        },
        created() {
            this.currency = this.getCurrency;
        }
    }
</script>

<style scoped>

</style>