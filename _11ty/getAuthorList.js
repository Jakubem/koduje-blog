module.exports = function(collection) {
  let authorSet = new Set();
  collection.getAll().forEach(function(item) {
    if( "author"
     in item.data ) {
      let author = item.data.author;
      authorSet.add(author);
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...authorSet];
};
