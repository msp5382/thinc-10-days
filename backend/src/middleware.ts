export default (req: any, res: any, next: () => void) => {
  console.log("middleware", req.headers.authorization);
  next();
};
