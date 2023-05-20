const username = 'TWITTER USERNAME'
const discordId = 'DISCORD USER ID'

function textToDiscord(msg) {
  const discordWebHookURL = "https://DISCORD WEBHOOK URL";
  const message = {
    "content": msg,
    "tts": false
  }
  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }
  UrlFetchApp.fetch(discordWebHookURL, param);
}

function callBack() {
  result = UrlFetchApp.fetch("https://script.google.com/macros/s/AKfycbyQEzTRXUrn5Fuz1IjvJA8TSbUwkYLBfUw9thLM4mWy8lqkvXit8tim4m53dQ-AwtuZ/exec?name=" + username).getContentText()
  const obj = JSON.parse(result);
  console.log(obj);

  const trueKeys = Object.keys(obj).filter(key => obj[key] === true);
  const trueKeyStrings = trueKeys.join(', ');
  if (trueKeyStrings !== '') {
    textToDiscord("<@" + discordId + "> \n なりすましが発生した可能性があります．ご確認ください．\n https://hirobon1690.github.io/spoofing-checker/");
  } else {
    textToDiscord("なりすましは確認されませんでした．");
  }
  console.log(trueKeyStrings);
}
