module.exports = (card, index) => {
    let output = card.replace(/{%PRODUCTNAME%}/g, index.productName);
    output = output.replace(/{%IMAGE%}/g, index.image);
    output = output.replace(/{%FROM%}/g, index.from);
    output = output.replace(/{%NUTRIENTS%}/g, index.nutrients);
    output = output.replace(/{%QUANTITY%}/g, index.quantity);
    output = output.replace(/{%PRICE%}/g, index.price);
    output = output.replace(/{%DESCRIPTION%}/g, index.description);
    output = output.replace(/{%ID%}/g, index.id);
  
    if (!index.organic)
      output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    return output;
  };