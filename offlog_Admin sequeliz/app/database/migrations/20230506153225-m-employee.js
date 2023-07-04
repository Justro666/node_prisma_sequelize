"use strict";

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, cb) {
  db.createTable(
    "m_employee",
    {
      id: {
        type: "bigint",
        primaryKey: true,
        autoIncrement: true
      },
      e_full_name: {
        type: "string",
        length: 128,
        notNull: true
      },
      e_nick_name: {
        type: "string",
        length: 32,
        notNull: false
      },
      e_dob: {
        type: "date",
        notNull: true
      },
      e_contact_mail: {
        type: "string",
        length: 128,
        notNull: true
      },
      e_phone: {
        type: "string",
        length: 128,
        notNull: true
      },
      e_emgc_phone: {
        type: "string",
        length: 128,
        notNull: false
      },
      e_blood_type: {
        type: "tinyint",
        notNull: false
      },
      e_nationality: {
        type: "string",
        length: 16,
        notNull: true
      },
      e_religion: {
        type: "tinyint",
        notNull: true
      },
      e_personal_id: {
        type: "string",
        length: 64
      },
      e_township_id: {
        type: "bigint",
        notNull: true,
        unsigned: true,
        foreignKey: {
          name: "e_township_id",
          table: "m_township",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "id"
        }
      },
      e_address: {
        type: "string",
        length: 256,
        notNull: true
      },
      e_employee_ID: {
        type: "string",
        length: 128,
        notNull: false
      },
      e_join_date: {
        type: "date",
        notNull: false
      },
      e_job_id: {
        type: "bigint",
        notNull: true,
        unsigned: true,
        foreignKey: {
          name: "e_job_id",
          table: "m_job_type",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "id"
        }
      },
      e_shift_time_id: {
        type: "bigint",
        notNull: false,
        unsigned: true,
        foreignKey: {
          name: "e_shift_time_id",
          table: "m_shift_time",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "id"
        }
      },
      del_flg: {
        type: "tinyint",
        defaultValue: new Integer(0)
      },
      create_date: {
        type: "timestamp"
      },
      create_by: {
        type: "bigint",
        notNull: true,
        unsigned: true,
        foreignKey: {
          name: "create_by",
          table: "m_admin",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "id"
        }
      },
      update_date: {
        type: "timestamp"
      },
      update_by: {
        type: "bigint",
        notNull: true,
        unsigned: true,
        foreignKey: {
          name: "create_by",
          table: "m_admin",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "id"
        }
      }
    },
    function(err) {
      if (err) return callback(err);
      return callback();
    }
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
