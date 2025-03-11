export function getCryptoAddress(crypto = "bitcoin") {
    const addresses = {
        "bitcoin": "bc1qqry4fl6wmheayfuyx3gcwt9m2hqr55g8hyzvz0",
        "bnb bep20": "0x82e0e68b8824e72E4C0ae69cdc409aeE93C388FD",
        "usdt trc20": "TUSaTT1kaqCiUrq4Wix9kitRyAFBTQgy2V",
        "ethereum": "0x82e0e68b8824e72E4C0ae69cdc409aeE93C388FD"
    };
    
    return addresses[crypto.toLowerCase()] || addresses["bitcoin"];
}

export function getWithdrawalWallet(wallet) {
    const shortForm = {
        "bitcoin": "btc",
        "bnb bep20": "bep20",
        "usdt trc20": "trc20",
        "ethereum": "erc20"
    };

    return shortForm[wallet.toLowerCase()] || "no valid wallet";
}