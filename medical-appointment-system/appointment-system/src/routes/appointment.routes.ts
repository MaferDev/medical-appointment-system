import {
  createAppointmentHandler,
  getAppointmentsHandler,
} from "../handlers/appointment.handler";

export default {
  "POST /pe/system/appointments": createAppointmentHandler,
  "GET /pe/system/appointments": getAppointmentsHandler,
};
