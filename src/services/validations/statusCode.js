const statusCode = {
  CREATED: 201,
  SUCCESSFUL: 200,
  BAD_REQUEST: 400,
  ACCESS_DENIED: 401,
  UNPROCESSABLE: 422,
};

const mapStatusCode = (errorMessage) => {
  if (
    errorMessage.includes('required')
    || errorMessage.includes('empty')
    || errorMessage.includes('must')
  ) {
    return statusCode.BAD_REQUEST;
  }

  return statusCode.ACCESS_DENIED;
};

const mapMessage = (errorMessage) => {
  if (errorMessage.includes('name')) {
    return errorMessage;
  }
  if (errorMessage.includes('categoryIds')) {
    return errorMessage;
  }

  if (errorMessage.includes('required') || errorMessage.includes('empty')) {
    return 'Some required fields are missing';
  }
  return errorMessage;
};

module.exports = {
  statusCode,
  mapStatusCode,
  mapMessage,
};
