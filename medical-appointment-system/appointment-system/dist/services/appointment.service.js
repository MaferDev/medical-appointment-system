"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentsByQuery = exports.createAppointment = void 0;
const appointment_repository_1 = __importStar(require("../database/appointment.repository"));
const patiente_respository_1 = __importDefault(require("../database/patiente.respository"));
const createAppointment = async (appointment) => {
    const date = new Date(); // Fecha actual
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");
    const patientDB = await patiente_respository_1.default.getPatient(appointment.document);
    if (!patientDB)
        throw new Error("Patient not found");
    const newAppointment = {
        id: formattedDate + "-" + appointment.document,
        document: appointment.document,
        patient: patientDB.name,
        speciality: appointment.speciality,
        status: appointment_repository_1.AppointmentStatus.REGISTERED,
        created_at: new Date().toISOString(),
    };
    const existAppointment = await appointment_repository_1.default.getAppointmentById(newAppointment.id);
    if (existAppointment)
        throw new Error("This patient already has an appointment registered");
    return await appointment_repository_1.default.createAppointment(newAppointment);
};
exports.createAppointment = createAppointment;
const getAppointmentsByQuery = async (query) => { };
exports.getAppointmentsByQuery = getAppointmentsByQuery;
