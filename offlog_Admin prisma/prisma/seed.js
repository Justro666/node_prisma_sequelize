const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

const admins = Array.from({ length: 10 }).map(() => ({
  a_name: faker.name.fullName(),
  a_email: faker.internet.email(),
  a_password: faker.internet.password(),
  a_verify: 1,
  a_secret_code: faker.random.alpha({ count: 22, casing: "lower" }),
  a_gender: 1,
  a_phone: faker.phone.number()
}));

const townships = Array.from({ length: 10 }).map(() => ({
  t_name: faker.address.cityName(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const jobTypes = Array.from({ length: 10 }).map(() => ({
  j_name: faker.name.jobTitle(),
  j_remark: faker.random.words(10),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const shiftTime = Array.from({ length: 10 }).map(() => ({
  s_start_time: faker.datatype.datetime(),
  s_end_time: faker.datatype.datetime(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const employee = Array.from({ length: 10 }).map(() => ({
  e_full_name: faker.name.fullName(),
  e_nick_name: faker.name.firstName(),
  e_dob: faker.datatype.datetime(),
  e_contact_mail: faker.internet.email(),
  e_phone: faker.phone.number(),
  e_nationality: faker.address.country(),
  e_personal_id: faker.random.numeric(5),
  e_township_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  e_address: faker.address.cityName(),
  e_job_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const department = Array.from({ length: 10 }).map(() => ({
  d_name: faker.commerce.department(),
  d_remark: faker.random.words(11),
  d_color: faker.color.human(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const empdepart = Array.from({ length: 10 }).map(() => ({
  e_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  d_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  ed_position: faker.name.jobTitle(),
  ed_join_date: faker.date.recent(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const attStatus = [
  {
    s_name: "early",
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  },
  {
    s_name: "in-time",
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  },
  {
    s_name: "late",
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  }
];

const tAttendance = Array.from({ length: 10 }).map(() => ({
  e_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  a_status_id: faker.datatype.bigInt({ min: 1, max: 3 }),
  a_check_in: faker.datatype.datetime(),
  a_check_out: faker.datatype.datetime(),
  a_break_time: faker.datatype.datetime(),
  a_work_hours: faker.datatype.datetime(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const report = Array.from({ length: 10 }).map(() => ({
  r_sender: faker.datatype.bigInt({ min: 1, max: 10 }),
  r_receiver: "1,2,3,4,5,6",
  r_cc: "1,2,3,4,5,6",
  r_subject: faker.random.words(2),
  r_meessage: faker.lorem.sentence(10),
  r_attach_type: faker.helpers.arrayElement([0, 1]),
  r_attach_path: faker.system.filePath(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const employeeNote = Array.from({ length: 10 }).map(() => ({
  n_title: faker.random.words(3),
  n_description: faker.lorem.sentences(3),
  n_pin: faker.helpers.arrayElement([0, 1]),
  e_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const holidayCategory = Array.from({ length: 10 }).map(() => ({
  c_name: faker.helpers.arrayElement([
    "official",
    "public",
    "national",
    "party"
  ]),
  c_color: faker.color.human(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const holiday = Array.from({ length: 10 }).map(() => ({
  h_name: faker.random.words(3),
  h_category: faker.datatype.bigInt({ min: 1, max: 4 }),
  h_date: faker.date.future(),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const leaveCategory = [
  {
    c_name: "unpaid",
    c_color: faker.color.human(),
    c_allow_days: 20,
    c_info: faker.random.words(10),
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  },
  {
    c_name: "annual",
    c_color: faker.color.human(),
    c_allow_days: 10,
    c_info: faker.random.words(10),
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  },
  {
    c_name: "health",
    c_color: faker.color.human(),
    c_allow_days: 10,
    c_info: faker.random.words(10),
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  },
  {
    c_name: "give birth",
    c_color: faker.color.human(),
    c_allow_days: 30,
    c_info: faker.random.words(10),
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  }
];

const leave = Array.from({ length: 10 }).map(() => ({
  e_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  c_id: faker.datatype.bigInt({ min: 1, max: 4 }),
  l_date: faker.date.future(),
  l_description: faker.lorem.sentences(3),
  l_request_status: faker.helpers.arrayElement([1, 2, 3]),
  l_reject_comment: faker.lorem.sentences(1),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const empLeave = Array.from({ length: 10 }).map(() => ({
  e_id: faker.datatype.bigInt({ min: 1, max: 10 }),
  c_id: faker.datatype.bigInt({ min: 1, max: 4 }),
  t_remain_leave: faker.datatype.number({ min: 1, max: 10 }),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const news = Array.from({ length: 10 }).map(() => ({
  n_photo_path_1: faker.system.filePath(),
  n_photo_path_2: faker.system.filePath(),
  n_photo_path_3: faker.system.filePath(),
  n_photo_path_4: faker.system.filePath(),
  n_photo_path_5: faker.system.filePath(),
  n_photo_path_6: faker.system.filePath(),
  n_title: faker.random.words(3),
  n_description: faker.lorem.sentences(3),
  n_tag: faker.datatype.number({ min: 0, max: 1 }),
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const mesCat = [
  {
    c_name: "Info",
    c_color: faker.color.human(),
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  },
  {
    c_name: "Warning",
    c_color: faker.color.human(),
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  },
  {
    c_name: "Reminder",
    c_color: faker.color.human(),
    create_by: faker.datatype.bigInt({ min: 1, max: 10 })
  }
];

const message = Array.from({ length: 10 }).map(() => ({
  m_photo_path_1: faker.system.filePath(),
  m_photo_path_2: faker.system.filePath(),
  m_photo_path_3: faker.system.filePath(),
  m_title: faker.random.words(3),
  m_description: faker.lorem.sentences(3),
  m_category: faker.datatype.number({ min: 1, max: 3 }),
  d_id: "1,2,3,4,5,6",
  e_id: "1,2,3,4,5,6",
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
}));

const officeSet = {
  o_name: "Ex;brain",
  o_category: "IT-Solution",
  o_location: "Thin Kan Kyun,Yadanar Road",
  o_lat: "16.843567452330046",
  o_long: " 96.19809166442997",
  o_start_time: faker.date.recent(),
  o_end_time: faker.date.recent(),
  o_break_time: faker.date.recent(),
  o_break_duration: 1,
  create_by: faker.datatype.bigInt({ min: 1, max: 10 })
};
async function main() {
  await prisma.m_admin.createMany({
    data: admins
  });
  await prisma.m_township.createMany({
    data: townships
  });
  await prisma.m_job_type.createMany({
    data: jobTypes
  });
  await prisma.m_shift_time.createMany({
    data: shiftTime
  });
  await prisma.m_employee.createMany({
    data: employee
  });
  await prisma.m_department.createMany({
    data: department
  });
  await prisma.t_employee_department.createMany({
    data: empdepart
  });
  await prisma.m_attendance_status.createMany({
    data: attStatus
  });
  await prisma.t_attendance.createMany({
    data: tAttendance
  });
  await prisma.m_report.createMany({
    data: report
  });
  await prisma.m_employee_note.createMany({
    data: employeeNote
  });
  await prisma.m_holiday_category.createMany({
    data: holidayCategory
  });
  await prisma.m_holiday.createMany({
    data: holiday
  });
  await prisma.m_leave_category.createMany({
    data: leaveCategory
  });
  await prisma.m_leave.createMany({
    data: leave
  });
  await prisma.t_employee_leave.createMany({
    data: empLeave
  });
  await prisma.m_news.createMany({
    data: news
  });
  await prisma.m_message_category.createMany({
    data: mesCat
  });
  await prisma.m_message.createMany({
    data: message
  });
  await prisma.m_office_setting.create({
    data: officeSet
  });
}

main()
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit();
  });
