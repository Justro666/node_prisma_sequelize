const Sequelize = require("sequelize");

module.exports = sequelize => {
  const AttendanceStatus = sequelize.define("m_attendance_status", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    s_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return AttendanceStatus;
};
