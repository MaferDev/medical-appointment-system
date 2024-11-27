import appointmentRepository, {
  AppointmentSchema,
  AppointmentStatus,
} from "../database/appointment.repository";
import patientRepository from "../database/patiente.respository";
import { CreateAppointmentDto } from "../models/appointment.model";

export const createAppointment = async (appointment: CreateAppointmentDto) => {
  const date = new Date(); // Fecha actual
  const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

  const patientDB = await patientRepository.getPatient(appointment.document);

  if (!patientDB) throw new Error("Patient not found");

  const newAppointment: AppointmentSchema = {
    id: formattedDate + "-" + appointment.document,
    document: appointment.document,
    patient: patientDB.name,
    speciality: appointment.speciality,
    status: AppointmentStatus.REGISTERED,
    created_at: new Date().toISOString(),
  };

  const existAppointment = await appointmentRepository.getAppointmentById(
    newAppointment.id
  );

  if (existAppointment)
    throw new Error("This patient already has an appointment registered");

  return await appointmentRepository.createAppointment(newAppointment);
};

export const getAppointmentsByQuery = async (query: string) => {};
