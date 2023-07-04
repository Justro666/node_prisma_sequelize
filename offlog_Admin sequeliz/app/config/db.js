const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    define: {
      timestamps: true
    }
  }
);

try {
  sequelize.authenticate(() => {
    console.log(
      "DB Connection : Connection has been established successfully."
    );
  });
} catch (error) {
  console.error("DB Connection : Unable to connect to the database:", error);
}

const db = {};

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

db.m_admins = require("../model/MAdmin.js")(sequelize);
db.m_township = require("../model/MTownship")(sequelize);
db.m_job_type = require("../model/MJobType")(sequelize);
db.m_shift_time = require("../model/MShiftTime")(sequelize);
db.m_employee = require("../model/MEmployee")(sequelize);
db.m_department = require("../model/MDepartmen")(sequelize);
db.t_employee_department = require("../model/TEmployeeDepartment")(sequelize);
db.m_attendance_status = require("../model/MAttendanceStatus")(sequelize);
db.t_attendance = require("../model/TAttendance")(sequelize);
db.m_report = require("../model/MReport")(sequelize);
db.m_employee_note = require("../model/MEmployeeNote")(sequelize);
db.m_holidy_category = require("../model/MHolidayCategory")(sequelize);
db.m_holiday = require("../model/MHoliday")(sequelize);
db.m_leave_category = require("../model/MLeaveCategory")(sequelize);
db.m_leave = require("../model/MLeave")(sequelize);

//m_township
db.m_admins.hasMany(db.m_township, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_township, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
//m_job_type
db.m_admins.hasMany(db.m_job_type, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_job_type, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

// //m_shift_time
db.m_admins.hasMany(db.m_shift_time, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_shift_time, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_employee
db.m_township.hasMany(db.m_employee, {
  foreignKey: { name: "e_township_id", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_job_type.hasMany(db.m_employee, {
  foreignKey: { name: "e_job_id", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_shift_time.hasMany(db.m_employee, {
  foreignKey: { name: "e_shift_time_id", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_employee, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_employee, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_department

db.m_admins.hasMany(db.m_department, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_department, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//t_employee_department

db.m_employee.hasMany(db.t_employee_department, {
  foreignKey: { name: "e_id", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_department.hasMany(db.t_employee_department, {
  foreignKey: { name: "d_id", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.t_employee_department, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.t_employee_department, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_attendance_status
db.m_admins.hasMany(db.m_attendance_status, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_attendance_status, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//t_attendance
db.m_employee.hasMany(db.t_attendance, {
  foreignKey: { name: "e_id", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_employee.hasMany(db.t_attendance, {
  foreignKey: { name: "a_status_id", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.t_attendance, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.t_attendance, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_report

db.m_admins.hasMany(db.m_report, {
  foreignKey: { name: "r_sender", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_department.hasMany(db.m_report, {
  foreignKey: { name: "r_receiver", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_department.hasMany(db.m_report, {
  foreignKey: { name: "r_cc", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_report, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_report, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_employee_note
db.m_employee.hasMany(db.m_employee_note, {
  foreignKey: { name: "e_id", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_employee_note, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_employee_note, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_holiday_category
db.m_admins.hasMany(db.m_holidy_category, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_holidy_category, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_holiday
db.m_holidy_category.hasMany(db.m_holiday, {
  foreignKey: { name: "h_category", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_holiday, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_holiday, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_leave_category
db.m_admins.hasMany(db.m_leave_category, {
  foreignKey: { name: "create_by", allowNull: false },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});
db.m_admins.hasMany(db.m_leave_category, {
  foreignKey: { name: "update_by", allowNull: true },
  constraints: true,
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

//m_leave

db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("DB Migrate : Sync Successful");
});

module.exports = db;
