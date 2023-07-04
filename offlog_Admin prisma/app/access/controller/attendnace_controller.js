const Helper = require("../../util/helper");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllAttendance = async (req, res, next) => {
  //   Helper.fmsg(res, "Testing Get All");
  //   next(new Error("Error Testin"));
  try {
    let data = await prisma.t_attendance.findMany();

    let allAttend = data.map(attend => {
      attend.id = typeof attend.id === "bigint" ? parseInt(attend.id) : false;
      attend.e_id =
        typeof attend.e_id === "bigint" ? parseInt(attend.e_id) : false;
      attend.a_status_id =
        typeof attend.a_status_id === "bigint"
          ? parseInt(attend.a_status_id)
          : false;
      attend.create_by =
        typeof attend.create_by === "bigint"
          ? parseInt(attend.create_by)
          : false;
      return attend;
    });

    Helper.fmsg(res, "All admins", allAttend);
  } catch (error) {
    next(new Error(error));
  }
};

module.exports = { getAllAttendance };
