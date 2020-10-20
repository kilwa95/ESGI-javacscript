

 const ucfirst = (chaine) => {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
 }

 const capitalise = (word) => { 
    if (typeof word !== "string" || word === "") return "";
     return word.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}



  const camelCase = (str) => {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
      });
  }







