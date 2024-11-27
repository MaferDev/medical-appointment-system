export const handler = async (event: any) => {
  console.log(`EVENT`);
  console.log(event);
  for (const record of event.Records) {
    console.log(`Appointment`);
    console.log(record.body);
  }
};
