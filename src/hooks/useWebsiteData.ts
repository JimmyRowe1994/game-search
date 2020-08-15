interface Website {
    [name: string]: {
        url: string;
        logo: string;
    }    
}

export const useWebsiteData = (searchValue: string) => {
    const websites: Website = {
        "Amazon": {
            url: `https://www.amazon.co.uk/s?k=${searchValue}&ref=nb_sb_noss`,
            logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
        },
        "base.com": {
            url: `https://www.base.com/fsearch.htm?search=${searchValue}`,
            logo: "https://www.hidefninja.com/community/attachments/base-gif.117009/"
        },
        "Coolshop": {
            url: `https://www.coolshop.co.uk/s/?q=${searchValue}`,
            logo: "https://www.mirakl.com/data/uploads/Coolshop.jpg"
        },
        "eBay": {
            url: `https://www.ebay.co.uk/sch/i.html?_from=R40&_nkw=${searchValue}&_sacat=0&_sop=15&rt=nc&LH_BIN=1`,
            logo: "https://purepng.com/public/uploads/large/purepng.com-ebay-logologobrand-logoiconslogos-251519938326w1a5t.png"
        },
        "GAME": {
            url: `https://www.game.co.uk/webapp/wcs/stores/servlet/AjaxCatalogSearch?storeId=10151&catalogId=10201&langId=44&pageSize=48&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=image&predictiveSearchURL=&searchTerm=${searchValue}`,
            logo: "https://www.mcvuk.com/wp-content/uploads/game-digital-1280x720.jpg"
        },
        "The Game Collection": {
            url: `https://www.thegamecollection.net/#sqr:(q[${searchValue}])`,
            logo: "https://cdn.dealspotr.com/zc-images/merchants/thegamecollection.net-5fuwuk.jpg?width=600&height=315&aspect=center"
        },
        "Monster Shop": {
            url: `https://www.monster-shop.co.uk/?s=${searchValue}&post_type=product&type_aws=true`,
            logo: "https://www.monster-shop.co.uk/wp-content/uploads/2015/10/monster-logo-colour.png"
        },
        "Shop Play": {
            url: `https://www.shopplay.co.uk/catalogsearch/result/?q=${searchValue}`,
            logo: "https://www.shopplay.co.uk/static/version1594410280/frontend/Pearl/shopplay/en_GB/images/logo.svg"
        },
        "Simply Games": {
            url: `https://www.simplygames.com/search?keywords=${searchValue}`,
            logo: "https://teamninja-studio.com/doa6/uk/images/products/shop-simplygames.png"
        },
        "Very": {
            url: `https://www.very.co.uk/e/q/${searchValue}.end?sort=price,1`,
            logo: "https://images.squarespace-cdn.com/content/v1/5c239dccaf2096e056402381/1551872917373-RQZ4XGLR6OLCCFR9Q1BS/ke17ZwdGBToddI8pDm48kOZQT_fux6Zkgfypw-nlXWFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI9-0U-UP4BidOyKdqTQ77S6TjUTBWPfPipMAdikqadxE/very-logo.png"
        }
    }

    return websites;
}