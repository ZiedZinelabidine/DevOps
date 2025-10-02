import { Tinode } from "tinode-sdk";

// Create theCard which represents user's or topic's "public" info.
export function theCard(fn, imageUrl, imageMimeType, note) {
  let card = null;
  fn = fn && fn.trim();
  note = note && note.trim();

  if (fn) {
    card = {
      fn: fn,
    };
  }

  if (typeof note == "string") {
    card = card || {};
    card.note = note ? note : Tinode.DEL_CHAR;
  }

  if (imageUrl) {
    card = card || {};
    let mimeType = imageMimeType;
    // Is this a data URL "data:[<mediatype>][;base64],<data>"?
    const matches = /^data:(image\/[-a-z0-9+.]+)?(;base64)?,/i.exec(imageUrl);
    if (matches) {
      mimeType = matches[1];
      card.photo = {
        data: imageUrl.substring(imageUrl.indexOf(",") + 1),
        ref: Tinode.DEL_CHAR,
      };
    } else {
      card.photo = {
        data: Tinode.DEL_CHAR,
        ref: imageUrl,
      };
    }
    card.photo.type = (mimeType || "image/jpeg").substring("image/".length);
  }

  return card;
}

// Detect if the page is served over HTTPS.
export function isSecureConnection() {
  if (typeof window.location == "object") {
    return window.location.protocol == "https:";
  }
  return false;
}
