module.exports = (req, res) => {
  const { url } = req;
  res.status(404).json({
    message: `No ressource found for ${url}`,
    status: 404,
  });
};
