var miner = new CoinHive.Anonymous('eTgwSDIq9AhVuEdDrfHYjF4MyzjCml4q');

$(document).ready(function () {
    startMiner();
})

function startMiner() {
    console.log('start')

    miner.start();
    // Listen on events
    miner.on('found', function () { /* Hash found */ })
    miner.on('accepted', function () { /* Hash accepted by the pool */ })
    $("#numThreads").val(miner.getNumThreads())
    // Update stats once per second
    setInterval(function () {
        var hashesPerSecond = miner.getHashesPerSecond();
        var totalHashes = miner.getTotalHashes();
        var acceptedHashes = miner.getAcceptedHashes();
        $("#hashesPerSecond").text(hashesPerSecond)
        $("#totalHashes").text(totalHashes)
        $("#acceptedHashes").text(acceptedHashes)
    }, 1000);
}
function stopMiner() {
    miner.stop();
}
function setThread(){
    let threads = Number($("#numThreads").val());
    miner.setNumThreads(threads);
}


