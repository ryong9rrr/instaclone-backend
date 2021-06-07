export const processHashtags = (caption) => {
  const hashtags = caption.match(/#[\w]+/g) || [];
  return hashtags.map((hashtag) => {
    hashtag = hashtag.toLowerCase();
    return {
      where: { hashtag },
      create: { hashtag },
    };
  });
};
