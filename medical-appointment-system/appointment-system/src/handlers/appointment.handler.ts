import {
  createAppointment,
  getAppointmentsByQuery,
} from "../services/appointment.service";
import { createResponse } from "../utils/response.helper";

export const createAppointmentHandler = async (event: any) => {
  try {
    const data = JSON.parse(event.body);
    console.log(data);

    // const appointementValid: CreateAppointmentDto =
    //   validateCreateAppointment(data);

    const result = await createAppointment(data);
    return createResponse(201, "Appointment created successfully", result);
  } catch (error: Error | any) {
    console.error(error);
    return createResponse(400, error.message);
  }
};

export const getAppointmentsHandler = async (event: any) => {
  try {
    const result = await getAppointmentsByQuery("");
    return createResponse(200, "Appointments retrieved successfully", result);
  } catch (error) {
    throw error;
  }
};
