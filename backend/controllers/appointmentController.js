import Appointment from "../models/Appointment.js";

/* ===========================
   Create Appointment
=========================== */

export const createAppointment = async (req, res) => {

  try {

    const {
      fullName,
      email,
      phone,
      doctor,
      treatment,
      appointmentDate,
      appointmentTime,
      message,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !doctor ||
      !treatment ||
      !appointmentDate ||
      !appointmentTime
    ) {

      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });

    }

    const appointment =
      await Appointment.create({

        patient: req.user.id,

        fullName,
  email,
  age,
  gender,
  phone,
  doctor,
  treatment,
  appointmentDate,
  appointmentTime,
  message,

      });

    res.status(201).json({

      success: true,

      message: "Appointment booked successfully.",

      appointment,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};

/* ===========================
   Patient Appointments
=========================== */

export const getPatientAppointments =
  async (req, res) => {

    try {

      const appointments =
        await Appointment.find({

          patient: req.user.id,

        }).sort({

          appointmentDate: -1,

        });

      res.status(200).json({

        success: true,

        appointments,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message: "Server Error",

      });

    }

  };

/* ===========================
   Admin - All Appointments
=========================== */

export const getAllAppointments =
  async (req, res) => {

    try {

      const appointments =
        await Appointment.find().sort({

          appointmentDate: -1,

        });

      res.status(200).json({

        success: true,

        appointments,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message: "Server Error",

      });

    }

  };

/* ===========================
   Update Appointment Status
=========================== */

export const updateAppointmentStatus =
  async (req, res) => {

    try {

      const { status } = req.body;

      const appointment =
        await Appointment.findByIdAndUpdate(

          req.params.id,

          { status },

          { new: true }

        );

      if (!appointment) {

        return res.status(404).json({

          success: false,

          message: "Appointment not found.",

        });

      }

      res.status(200).json({

        success: true,

        message: "Status updated.",

        appointment,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message: "Server Error",

      });

    }

  };

/* ===========================
   Delete Appointment
=========================== */

export const deleteAppointment =
  async (req, res) => {

    try {

      const appointment =
        await Appointment.findByIdAndDelete(
          req.params.id
        );

      if (!appointment) {

        return res.status(404).json({

          success: false,

          message: "Appointment not found.",

        });

      }

      res.status(200).json({

        success: true,

        message: "Appointment deleted.",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message: "Server Error",

      });

    }

  };