module.exports.handler = async (event) => {
  console.log(`EVENT`);
  console.log(event);
  const body = JSON.parse(event.body);
  console.log(body);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Appointment created successfully" }),
  };
};
