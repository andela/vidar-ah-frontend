const setArticleImage = (article) => {
  let image;
  if (!article.image) {
    image = 'https://via.placeholder.com/700x400';
  } else if (typeof article.image === 'string') {
    const { image: img } = article;
    image = img;
  } else {
    image = URL.createObjectURL(article.image);
  }
  return image;
};

export default setArticleImage;
