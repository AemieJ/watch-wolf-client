let historyLinks = null;
let server = "https://13.233.148.83";
let responseData = null;
let count = 0;
let dict = {};

const sendLinks = (twitterLinks) => {
    for (const tweet of twitterLinks) {
        let tweetRegex = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/g;
        let found = tweet.match(tweetRegex);
        if (found !== null) {
            let removeQuery = tweet.split("?")[0]
            let list = removeQuery.split("/");
            let tweetID = list[list.length - 1];

            let base64 = "ZGVsdGE6Y3lMdEVIVG53V3czV3ZwaEpWVlQ=";

            let requestOptions = {
                method: 'POST',
                headers: {
                    "Authorization": `Basic ZGVsdGE6Y3lMdEVIVG53V3czV3ZwaEpWVlQ=`,
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    "tweetId": tweetID
                }),
                redirect: 'follow'
            };

            // console.log("Sending request to server...")
            // console.log(requestOptions)

            chrome.runtime.sendMessage(
                {
                    contentScriptQuery: "postData"
                    , options: JSON.stringify(requestOptions)
                    , url: "http://13.233.148.83/api/examine/twitter"
                }, function (response) {
                    if (response != undefined && response != "" && response.status !== 500) {
                        if (document.getElementById(tweetID) === null || document.getElementById(tweetID) === undefined) {
                            addToDOM(response, tweet, tweetID);
                        } else {
                            document.getElementById(tweetID).remove();
                            addToDOM(response, tweet, tweetID);
                        }
                        
                    } 
                });


        }
    }
}

const setsAreEqual = (a, b) => {
    if (a === null || b === null) return false; 

    if (a.size !== b.size) {
        return false;
    }

    return Array.from(a).every(element => {
        return b.has(element);
    });
}

const addToDOM = (jsonRes, tweet, tweetID) => {
    const positive = (Math.round(jsonRes.sentiment.positiveScore * 1000) / 1000).toFixed(2);
    const negative = (Math.round(jsonRes.sentiment.negativeScore * 1000) / 1000).toFixed(2);
    let neutral = (Math.round(jsonRes.sentiment.neutralScore * 1000) / 1000).toFixed(2);
    const mixed = (Math.round(jsonRes.sentiment.mixedScore * 1000) / 1000).toFixed(2);
    neutral = Number(neutral) + Number(mixed);
    neutral = neutral.toFixed(2);

    console.log(positive, negative, neutral)
    let articles = document.querySelectorAll("article[data-testid=tweet]");
    articles.forEach((el) => {
        let links = el.querySelectorAll("a");
        links.forEach((elm) => {
            if (elm.href === tweet) {
                let parent = elm.parentElement.parentElement.parentElement;
                let divElement = document.createElement("div"); 
                divElement.id = tweetID;

                divElement.innerText = `😄 ${(positive * 100).toFixed(2)}% 😔 ${(negative * 100).toFixed(2)}% 😐 ${(neutral * 100).toFixed(2)}%`;
                divElement.style.background = "#fff";
                divElement.style.border = "1px solid aqua";
                divElement.style.marginBottom = "1rem";
                divElement.style.marginTop = "0.4rem";
                divElement.style.fontSize = "0.85rem";
                divElement.style.borderRadius = "10px";
                divElement.style.padding = "0rem 0.3rem";
                divElement.style.fontFamily = "sans-serif";
                divElement.style.width = "38%";
                divElement.style.textAlign = "center";

                if (positive > negative && positive > neutral) {
                    divElement.style.background = "#50C878";
                    divElement.style.border = "1px solid #008000";
                } 

                if (negative > positive && negative > neutral) {
                    divElement.style.background = "#FF5C5C";
                    divElement.style.border = "1px solid #8B0000";
                }

                parent.appendChild(divElement);
            }
        })
    })
}

let stateCheck = setInterval(() => {
    if (document.querySelectorAll("article[data-testid=tweet]").length !== 0) {
        clearInterval(stateCheck);

        if (count === 0) {
            let twitterLinks = new Set();
            let articles = document.querySelectorAll("article[data-testid=tweet]");
            let idx = 0;
            articles.forEach((el) => {
                ++idx;
                let links = el.querySelectorAll("a");
                links.forEach((elm) => {
                    if (elm.hasAttribute("aria-label")) {
                        twitterLinks.add(elm.href);
                        dict[idx] = elm.href;
                    }
                })
            })

            ++count;
            sendLinks(twitterLinks);
        }

        document.addEventListener("scroll", () => {
            let twitterLinks = new Set();
            let articles = document.querySelectorAll("article[data-testid=tweet]");
            let idx = 0;
            articles.forEach((el) => {
                ++idx;
                let links = el.querySelectorAll("a");
                links.forEach((elm) => {
                    if (elm.hasAttribute("aria-label")) {
                        twitterLinks.add(elm.href);
                        dict[idx] = elm.href;
                    }
                })
            })

            if (setsAreEqual(historyLinks, twitterLinks) === false) {
                sendLinks(twitterLinks);
                historyLinks = twitterLinks;
            }
        })
    }
}, 100);

// document.querySelectorAll("article[data-testid=tweet]")
