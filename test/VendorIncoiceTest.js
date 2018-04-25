/**
 * Created by mohandeath on 4/24/2018 AD.
 */
var account_one = "0x1234..."; // an address
var account_two = "0xabcd..."; // another address

var meta;
MetaCoin.deployed().then(function(instance) {
  meta = instance;
  return meta.sendCoin(account_two, 10, {from: account_one});
}).then(function(result) {
  // If this callback is called, the transaction was successfully processed.
  alert("Transaction successful!")
}).catch(function(e) {

  // There was an error! Handle it.
});


