const RESPONSE_TYPE = {
    TEXT: "Text",
    PDF: "PDF",
    IMAGE: "Image",
    TWEET: "Tweet"
  }
  
  const OFFICER_NAME = "Officer Rakesh Shukla"
  const RECEIVER_EMAIL = "bginger436@gmail.com"
  
  function _toTitleCase(str) {
    return str.split(' ')
      .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(' ');
  }
  
  function _toPercent(num) {
    return (100 * num).toFixed(1) + "%";
  }
  
  function _entitiesString(entities) {
    let str = ''
    for (const index in entities) {
      const entity = entities[index]
      const position = Number(index) + 1
      str += `
  ${position}: "${entity.text}"
        ${_toTitleCase(entity.type)}: ${_toPercent(entity.score)}
        `
    }
  
    return str;
  }
  
  function getMailLink(responseType, content, score, language, entities) {
    let link = `mailto:${RECEIVER_EMAIL}?subject=${responseType} Analysis Report: ${OFFICER_NAME} - ${Date().toString()}`
  
    // Body
    link +=
      `&body=Content:
  ${content}
  
  Sentiment Score:
    Positive: ${_toPercent(score[0])}%
    Negative: ${_toPercent(score[1])}%
    Neutral: ${_toPercent(score[2])}%
  
  Language: ${language === "en" ? "English" : "Hindi"}
  
  Entities Detected:
  ${_entitiesString(entities)}
  `
  
    return encodeURI(link);
  }
  
  // TODO: Remove Below Example
  
  const link = getMailLink(
    RESPONSE_TYPE.TEXT,
    "Hello World",
    [0.6309710144996643, 0.6309710144996643, 0.6309710144996643],
    "en",
    [
      {
        "text": "Sardar",
        "type": "PERSON",
        "score": 0.6309710144996643
      },
      {
        "text": "Vallabhbhai",
        "type": "ORGANIZATION",
        "score": 0.4112573564052582
      },
      {
        "text": "National Institute of Technology",
        "type": "ORGANIZATION",
        "score": 0.820284903049469
      },
    ]);
  

module.exports = {
    getMailLink
}