(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
       '$http',
       '$localtion',
       'msgs',
       'tabs',
       BillingCycleController
    ])

    function BillingCycleController($http){
        const vm = this
        const url = 'http://localhort:3003/api/billingCycles'

       vm.create = function(){
              $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCycle = {}
                console.log('Sucesso!')
            })
        }

    }
})()