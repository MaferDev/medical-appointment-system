export type CreateAppointmentDto = {
  document: string;
  speciality: string;
};

// export const CreateAppointmentSchema = Joi.object({
//   document: Joi.string().required(),
//   speciality: Joi.string().required(),
// });

// export const validateCreateAppointment = (
//   data: CreateAppointmentDto
// ): CreateAppointmentDto => {
//   const { error, value } = CreateAppointmentSchema.validate(data, {
//     abortEarly: false,
//   });
//   if (error) {
//     throw new Error(
//       `Validation failed: ${error.details.map((e) => e.message).join(", ")}`
//     );
//   }
//   return value;
// };
