export const videoUrlToId = url => {
  const isYoutube = url.search('youtube') >= 0 ? true : false;
  const isVimeo = url.search('vimeo') >= 0 ? true : false;
  const regExpYoutube = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const regExpVimeo = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
  const match = isYoutube
    ? url.match(regExpYoutube)
    : isVimeo
    ? url.match(regExpVimeo)
    : false;

  let id = false;

  if (isYoutube) {
    id = match && match[7].length == 11 ? match[7] : false;
  } else if (isVimeo) {
    id = match ? match[2] : null;
  }

  return id;
};

export const videoUrlToEmbedUrl = url => {
  const isYoutube = url.search('youtube') >= 0 ? true : false;
  const isVimeo = url.search('vimeo') >= 0 ? true : false;
  const id = videoUrlToId(url);

  return isYoutube
    ? `https://www.youtube.com/embed/${id}`
    : isVimeo
    ? `https://player.vimeo.com/video/${id}`
    : false;
};
