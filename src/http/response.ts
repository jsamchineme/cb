const response = {
  success: (res, data?) => res.status(200).json(data),
  created: (res, data) => res.status(201).json(data),
  noContent: (res) => res.status(204).json(),
  internalServerError: (res, error) => res.status(500).json({
    message: 'There was an error with your request. Try again',
    error,
  }),
};

export default response;
