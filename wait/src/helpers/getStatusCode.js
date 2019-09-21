module.exports = (errorName) => {
  switch (errorName) {
    case 'NOT_FOUND':
      return 404;
    case 'BAD_REQUEST':
      return 400;
    default:
      return 500;
  }
};
