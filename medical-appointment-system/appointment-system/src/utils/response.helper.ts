export type ResponseApi = {
  statusCode: number;
  body: string;
};
export const createResponse = (
  statusCode: number,
  message: any,
  data?: any
): ResponseApi => ({
  statusCode,
  body: JSON.stringify({ message, data }),
});
