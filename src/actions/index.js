import axios from "axios";


let config = {
  headers: {
    "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
  }
}
export function changeText(text) {
  return (dispatch) => {
    return axios.get(`https://yoda.p.mashape.com/yoda?sentence=${text}`, config).then((response)=>{
      dispatch(origText(response.data));
    }).catch((err) => {
      throw err;
    })
  }
}


export function origText(text) {
  return {
    type: "ORIG_TEXT",
    text
  }
}
