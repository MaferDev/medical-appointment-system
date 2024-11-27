import appointmentModel from "../database/appointmentModel";

export const createAppointment = async (appointment: any) => {
  console.log("createAppointment Service: ", appointment);

  return await appointmentModel.createAppointment(appointment);
};

export const getAppointmentsByQuery = async (query: any) => {
  console.log("getAppointmentsByQuery: ", query);
  return [];
};
