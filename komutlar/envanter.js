module.exports = {
        name: "envanter",
        code: `
$description[**Rozetler :** $replaceText[$replaceText[$getUserVar[rozet1;$mentioned[1;yes]];false;\`Yok\`;-1];true;🔱;-1] **|** $replaceText[$replaceText[$getUserVar[rozet2;$mentioned[1;yes]];false;\`Yok\`;-1];true;⚜️;-1]
**Su:** $getUserVar[su;$mentioned[1;yes]]
**Ayran:** $getUserVar[ayran;$mentioned[1;yes]]
**Simit:** $getUserVar[simit;$mentioned[1;yes]]
**Paran:** $getServerVar[pbirim] $getUserVar[para;$mentioned[1;yes]]
]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların envanteri olmaz.]
        `
}