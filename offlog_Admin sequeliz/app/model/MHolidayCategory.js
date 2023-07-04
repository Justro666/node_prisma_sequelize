const Sequelize = require("sequelize");

module.exports = sequelize => {
  const HolidayCategory = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    c_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    c_color: {
      type: Sequelize.STRING(7),
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return HolidayCategory;
};
