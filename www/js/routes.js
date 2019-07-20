angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('digitusPaySeller', {
    url: '/home',
    templateUrl: 'templates/digitusPaySeller.html',
    controller: 'digitusPaySellerCtrl'
  })

  .state('mobileNumber', {
    url: '/mobileNumber',
    templateUrl: 'templates/mobileNumber.html',
    controller: 'mobileNumberCtrl'
  })

  .state('enterAmount', {
    url: '/page5',
    templateUrl: 'templates/enterAmount.html',
    controller: 'enterAmountCtrl'
  })

  .state('payCode', {
    url: '/payCode',
    templateUrl: 'templates/payCode.html',
    controller: 'payCodeCtrl'
  })

  .state('fingerScan', {
    url: '/fingerScan',
    templateUrl: 'templates/fingerScan.html',
    controller: 'fingerScanCtrl'
  })

  .state('registerFinger', {
    url: '/registerFinger',
    templateUrl: 'templates/registerFinger.html',
    controller: 'registerFingerCtrl'
  })

  .state('paymentComplete', {
    url: '/page6',
    templateUrl: 'templates/paymentComplete.html',
    controller: 'paymentCompleteCtrl'
  })

  .state('userRegistrationComplete', {
    url: '/userRegistrationComplete',
    templateUrl: 'templates/userRegistrationComplete.html',
    controller: 'userRegistrationCompleteCtrl'
  })

  .state('registerUser', {
    url: '/registerUser',
    templateUrl: 'templates/registerUser.html',
    controller: 'registerUserCtrl'
  })

  .state('oTPVerification', {
    url: '/otpVerification',
    templateUrl: 'templates/oTPVerification.html',
    controller: 'oTPVerificationCtrl'
  })

$urlRouterProvider.otherwise('/home')


});