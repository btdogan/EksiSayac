$("document").ready(function(){

chrome.storage.sync.get("girdiSayisi", function (items) {

    var count = parseInt(items.girdiSayisi);

    var page = ($(".pager").data("currentpage") ? $(".pager").data("currentpage") : 1),
        once = (parseInt($(".showall").text()) ? parseInt($(".showall").text()) : 0),
        tot = page * count,
        start = (page * count) - count + 1,
        ente = Number(start) + Number(once),
        ente2 = Number(tot) + Number(once);

    for (i = ente; i <= ente2; i++) {
        var cont = i - (page * count) + count - 1 - once;
        var content = $(".content")[cont];
        content.innerHTML = i + ". " + content.innerHTML;
    }
});

$("a[href*='imgur']").each(function () {
    this.href = this.href.replace("imgur", "filmot");
});


chrome.storage.sync.get("ackapas", function (items) {
    var ackapaf = items.ackapas;

    if (ackapaf) {

        chrome.storage.sync.get("zaman", function (items) {
            var timer = parseInt(items.zaman);


            setInterval(function () {
                $('#feed-refresh-link')[0].click();
            }, timer);


        });
    }

});
})
