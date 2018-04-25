var vendor = "0xF8F4D4227F7d86C526D6EFeB5214Ba6B229401d6"; // an address
var customer = "0x6e9E9B26819a66c82337df78bdA2E80e6822F2E5"; // another address
var company = "";

module.exports = function(callback) {
    VendorInvoice.deployed().then(function (instance) {
        factory = instance;
        return factory.addInvoice(vendor, "firstInvoice", "110-222A", 10000000000, customer, false, 232323232, {invoiceid: "110-220A"});
    }).then(function (result) {
        // If this callback is called, the transaction was successfully processed.

        for (var i = 0; i < result.logs.length; i++) {
            var log = result.logs[i];
            console.info("EVENT FOUND : " + log.event);
        }
        console.log("Transaction successful!" + result);
    }).catch(function (e) {
        // There was an error! Handle it.
        console.log("ERROR HAPPEND : is -> " + e);
    });
};

