import User from "../models/User.js";

/* ===========================
   Get All Patients
=========================== */

export const getPatients = async (req, res) => {

  try {

    const patients = await User.find({

      role: "patient",

    }).select("-password");

    res.status(200).json({

      success: true,

      patients,

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
   Delete Patient
=========================== */

export const deletePatient = async (req, res) => {

  try {

    const patient = await User.findById(req.params.id);

    if (!patient) {

      return res.status(404).json({

        success: false,

        message: "Patient not found",

      });

    }

    if (patient.role !== "patient") {

      return res.status(400).json({

        success: false,

        message: "Only patients can be deleted.",

      });

    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({

      success: true,

      message: "Patient deleted successfully.",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};