module.exports = {
        name: "cüzdan",
        code: `$author[$userTag[$mentioned[1;yes]]'in cüzdanı.]
        $addField[$getServerVar[pbirim];\`$getUserVar[para;$mentioned[1;yes]]\`;yes]
        $addField[🏦;\`$getUserVar[banka;$mentioned[1;yes]\`;yes]
        $color[303136]
        $thumbnail[$userAvatar[$mentioned[1;yes]]]
        $onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların parası olmaz.]
        
        
        `
}