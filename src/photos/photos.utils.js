export const processHashtags = (text) => {
  const hashtags = text.match(/#[\w]+/g) || [];
  return hashtags.map((hashtag) => {
    hashtag = hashtag.toLowerCase();
    return {
      where: { hashtag },
      create: { hashtag },
    };
  });
};

export const getHashtags = (text) => {
  const hashtags = text.match(/#[\w]+/g) || [];
  return hashtags.map((hashtag) => {
    hashtag = hashtag.toLowerCase();
    return {
      hashtag,
    };
  });
};
