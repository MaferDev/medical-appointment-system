import dynamoDb from "./dynamoClient";

export enum AppointmentStatus {
  REGISTERED = "REGISTERED",
  ASSIGNED = "ASSIGNED",
  COMPLETED = "COMPLETED",
}

export type AppointmentSchema = {
  id: string;
  document: string;
  patient: string;
  speciality: string;
  status: AppointmentStatus;
  created_at: string;
  date?: string;
  update_at?: string;
};

const createAppointment = async (
  appointment: AppointmentSchema
): Promise<AppointmentSchema> => {
  const TABLE_NAME = `${process.env.COUNTRY}-appointment`;

  const params = {
    TableName: TABLE_NAME,
    Item: appointment,
  };
  const response = await dynamoDb.put(params).promise();
  console.log("createAppointmentDB: ", TABLE_NAME, { response });
  return appointment;
};

const getAppointmentById = async (
  id: string
): Promise<AppointmentSchema | null> => {
  const TABLE_NAME = `${process.env.COUNTRY}-appointment`;
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    if (result.Item) {
      console.log("Appointment:", result.Item);
      return result.Item as AppointmentSchema;
    }
  } catch (error) {
    console.error("Error retrieving apointment item:", error);
  }
  return null;
};

export default {
  createAppointment,
  getAppointmentById,
};
