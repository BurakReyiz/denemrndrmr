module.exports = {
        name: "market",
        code: `$author[$username[$clientID] Market]
        $addField[$getServerVar[prefix]satın-al su;\`Su satın alırsınız.\` **Tanesi:1 $getUserVar[pbirim]**;yes]
        $addField[$getServerVar[prefix]satın-al ayran;\`Ayran satın alırsınız.\` **Tanesi:1 $getUserVar[pbirim]**;yes]
        $addField[$getServerVar[prefix]satın-al simit;\`Simit satın alırsınız.\` **Tanesi:2 $getUserVar[pbirim]**;yes]
        $addField[$getServerVar[prefix]satın-al rozet1;🔱 \`Rozetini satın alırsınız.\` **Fiyatı: 100 $getUserVar[pbirim]**;yes]
        $addField[$getServerVar[prefix]satın-al rozet2;⚜️ \`Rozetini satın alırsınız.\` **Fiyatı: 200 $getUserVar[pbirim]**;yes]
        $color[RANDOM]
        `
}