[![Latest Stable Version](https://poser.pugx.org/deadsimple/vuelidatelibrary/version)](https://packagist.org/packages/deadsimple/vuelidatelibrary) [![Total Downloads](https://poser.pugx.org/deadsimple/vuelidatelibrary/downloads)](https://packagist.org/packages/deadsimple/vuelidatelibrary) [![License](https://poser.pugx.org/deadsimple/vuelidatelibrary/license)](https://packagist.org/packages/deadsimple/vuelidatelibrary)

# Deadsimple Vuelidate Magento2 Composer Library

Implement modern form validation to your Magento 2 VueJS forms using [vuelidate](https://vuelidate.js.org/)

## Installation

Use composer to install the module: `composer require deadsimple/vuelidatelibrary`

## Usage

To use Vuelidate you will need to load the `Vuelidate` library and it's `Validators` using the Magento 2 requirejs methods. Select the neccesary mixin and the validators you would like to use with the destructure syntax. Load the mixin like any other mixins and start using Vuelidate as described in it's [documentation](https://vuelidate.js.org/#getting-started).


```
define([
    'Vue',
    'Vuelidate',
    'VuelidateValidators',
], function (Vue, Vuelidate, validators) {

    const {validationMixin} = Vuelidate;
    const {required, email } = validators;
    
    Vue.component('contactForm', {
        template: template,
        mixins: [ validationMixin ],
        data() {
          return { 
            name: null,
            email: null, 
          }
        },
        validations(){ 
          name: { required },
          email: { required, email }
        }
    })
})
``` 

### Version

This library loads: `Vuelidate v0.7.5`

