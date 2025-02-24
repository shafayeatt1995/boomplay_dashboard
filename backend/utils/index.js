const utils = {
  cookieParse(cookie) {
    return cookie.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=").map((item) => item.trim());
      acc[name] = decodeURIComponent(value);
      return acc;
    }, {});
  },
};

module.exports = utils;
