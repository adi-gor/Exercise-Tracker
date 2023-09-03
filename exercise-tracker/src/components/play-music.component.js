import React from "react";

const PlayList = (props) => {
  props.hideNav(false);
  return (
    <div dangerouslySetInnerHTML={{ __html: "<iframe style={{border-radius:12px}} src='https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh?utm_source=generator' width='100%' height='750' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>"}} />
  );
};
export default PlayList;