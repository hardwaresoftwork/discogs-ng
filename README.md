# Discogs-NG #

### AngularJS 1.x service for Discogs API ###


#### Methods ####
##### User #####

* getUserByName

##### Marketplace #####

* getMarketitemsByUsername

#### Example ####

Just add the service as dependency to your controller and make a call.

```javascript
Discogs.getMarketitemsByUsername('bnz')
.then(
  function( response ) {
    $scope.user.marketitems = response;
  }
);
```

#### Demo ####

* https://iambnz.github.io/discogs-ng/

#### API explorer example ####
