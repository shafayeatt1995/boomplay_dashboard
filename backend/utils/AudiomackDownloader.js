const axios = require("axios");
const OAuth = require("oauth-1.0a");
const { createHmac } = require("crypto");
const CLIENT_ID = "audiomack-js";
const CLIENT_SECRET = "f3ac5b086f3eab260520d8e3049561e6";

class AudiomackDownloader {
  constructor(clientId = CLIENT_ID, clientSecret = CLIENT_SECRET) {
    this.oauth = OAuth({
      consumer: {
        key: clientId,
        secret: clientSecret,
      },
      signature_method: "HMAC-SHA1",
      hash_function(base_string, key) {
        return createHmac("sha1", key).update(base_string).digest("base64");
      },
    });
  }

  async makeRequest(url) {
    const request_data = {
      method: "GET",
      data: { oauth_callback: "http://localhost" },
      url,
    };

    try {
      const { data } = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: this.oauth.toHeader(this.oauth.authorize(request_data)),
      });

      return data;
    } catch (error) {
      console.error(error);
      console.error(error?.response?.data);
      throw new Error("Failed to fetch data from Audiomack");
    }
  }

  async getSongById(songId) {
    const url = `https://api.audiomack.com/v1/music/${songId}`;
    return this.makeRequest(url);
  }

  async getSongUrlById(songId) {
    const url = `https://api.audiomack.com/v1/music/play/${songId}`;
    return this.makeRequest(url);
  }

  async getSongByName(artist, song) {
    const url = `https://api.audiomack.com/v1/music/song/${artist}/${song}`;
    return this.makeRequest(url);
  }

  async getSongsByAlbum(artist, album) {
    const url = `https://api.audiomack.com/v1/music/album/${artist}/${album}`;
    return this.makeRequest(url);
  }
}

module.exports = AudiomackDownloader;
