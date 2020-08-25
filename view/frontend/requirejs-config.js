var config = {
    map: {
        '*': {
            'Vuelidate': 'Deadsimple_Vuelidate/js/lib/vuelidate.min',
            'VuelidateValidators': 'Deadsimple_Vuelidate/js/lib/validators.min',
        }
    },
    shim: {
        'Vuelidate': ['Vue'],
        'VuelidateValidators': ['Vue']
    }
};
