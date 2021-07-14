/**
 * This wraps async functions, like the controllers
 * This is done so that any errors thrown can be intercepted by the error handler
 * @param {Function} fn - async function
 * @returns {Function} - error handler middleware
 */
const wrapAsync = (fn) => {
  const errorInterceptor = (req, res, next) => {
    // middleware for intercepting async errors and passing them to next middleware,
    // which is the errorHandler middleware
    if(fn) {
      fn(req, res, next).catch(next);
    }
  };
  return errorInterceptor;
};

export default wrapAsync;
