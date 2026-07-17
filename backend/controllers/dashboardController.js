import User from "../models/User.js";
import Appointment from "../models/Appointment.js";

export const getDashboardStats = async (req, res) => {

  try {

    const totalPatients = await User.countDocuments({
      role: "patient",
    });

    const totalAppointments =
      await Appointment.countDocuments();

    const pendingAppointments =
      await Appointment.countDocuments({
        status: "Pending",
      });

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1);

    const todayAppointments =
      await Appointment.countDocuments({

        appointmentDate: {

          $gte: today,

          $lt: tomorrow,

        },

      });

    const recentAppointments =
      await Appointment.find()

        .sort({ createdAt: -1 })

        .limit(5)

        .select(
          "fullName doctor treatment appointmentDate status"
        );

    res.status(200).json({

      success: true,

      totalPatients,

      totalAppointments,

      todayAppointments,

      pendingAppointments,

      recentAppointments,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};