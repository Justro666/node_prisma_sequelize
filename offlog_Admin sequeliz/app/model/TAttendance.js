const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Attendance = sequelize.define("t_attendance", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    a_check_in: {
      type: Sequelize.DATE,
      allowNull: false
    },
    a_check_out: {
      type: Sequelize.DATE,
      allowNull: false
    },
    a_break_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    a_work_hours: {
      type: Sequelize.DATE,
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Attendance;
};
