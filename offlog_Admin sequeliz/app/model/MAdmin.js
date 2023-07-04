const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Admin = sequelize.define("m_admin", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    a_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    a_email: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    a_password: {
      type: Sequelize.STRING(1288),
      allowNull: false
    },
    a_verify: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    a_secret_code: {
      type: Sequelize.STRING(256),
      allowNull: false
    },
    a_gender: {
      type: Sequelize.TINYINT
    },
    a_phone: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Admin;
};
