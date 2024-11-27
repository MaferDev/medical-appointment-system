const createAppointment = async (appointment: any) => {
  const TABLE_NAME = `${process.env.COUNTRY}-appointments`;

  console.log("createAppointmentDB: ", TABLE_NAME, appointment);
  return {};
};

export default {
  createAppointment,
};
