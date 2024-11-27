import { APIGatewayProxyHandler } from "aws-lambda";
import routes from "./routes";
import { Logger, LogLevel } from "./utils/logger";
import { createResponse, ResponseApi } from "./utils/response.helper";

const logger = new Logger({
  serviceName: "AppointmentService",
  logLevel: LogLevel.DEBUG, // Ajusta según el entorno
});

export const handler: APIGatewayProxyHandler = async (
  event: any
): Promise<ResponseApi> => {
  const routeKey = `${event.httpMethod} ${event.path}`;

  const routeHandler = routes[routeKey as keyof typeof routes];

  const pathSplited = event.path.split("/");
  process.env.COUNTRY = pathSplited[1];
  console.log("COUNTRY: ", process.env.COUNTRY);

  try {
    logger.info("Lambda invocation started", routeKey);

    if (routeHandler) {
      return routeHandler(event);
    }
    return createResponse(404, "Route not found");
  } catch (error) {
    return createResponse(500, "Internal Server Error");
  }
};
