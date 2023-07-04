-- CreateTable
CREATE TABLE `m_admin` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `a_name` VARCHAR(128) NOT NULL,
    `a_email` VARCHAR(128) NOT NULL,
    `a_password` VARCHAR(128) NOT NULL,
    `a_verify` TINYINT NOT NULL,
    `a_secret_code` VARCHAR(128) NOT NULL,
    `a_gender` TINYINT NOT NULL,
    `a_phone` VARCHAR(191) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_township` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `t_name` VARCHAR(128) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `create_by` BIGINT NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_job_type` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `j_name` VARCHAR(128) NOT NULL,
    `j_remark` VARCHAR(128) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `create_by` BIGINT NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_shift_time` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `s_start_time` DATETIME(3) NOT NULL,
    `s_end_time` DATETIME(3) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `create_by` BIGINT NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_employee` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `e_full_name` VARCHAR(128) NOT NULL,
    `e_nick_name` VARCHAR(128) NULL,
    `e_dob` DATETIME(3) NOT NULL,
    `e_contact_mail` VARCHAR(128) NOT NULL,
    `e_phone` VARCHAR(128) NOT NULL,
    `e_emgc_phone` VARCHAR(128) NULL,
    `e_blood_type` TINYINT NULL,
    `e_nationality` VARCHAR(64) NOT NULL,
    `e_religion` TINYINT NULL,
    `e_personal_id` VARCHAR(64) NOT NULL,
    `e_township_id` BIGINT NOT NULL,
    `e_address` VARCHAR(256) NOT NULL,
    `e_employee_ID` VARCHAR(128) NULL,
    `e_join_date` DATETIME(3) NULL,
    `e_job_id` BIGINT NOT NULL,
    `e_shift_time_id` BIGINT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `create_by` BIGINT NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_department` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `d_name` VARCHAR(128) NOT NULL,
    `d_remark` VARCHAR(1024) NOT NULL,
    `d_color` VARCHAR(128) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `create_by` BIGINT NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_employee_department` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `e_id` BIGINT NOT NULL,
    `d_id` BIGINT NOT NULL,
    `ed_position` VARCHAR(128) NOT NULL,
    `ed_join_date` DATETIME(3) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_attendance_status` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `s_name` VARCHAR(128) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_attendance` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `e_id` BIGINT NOT NULL,
    `a_status_id` BIGINT NOT NULL,
    `a_check_in` DATETIME(3) NOT NULL,
    `a_check_out` DATETIME(3) NOT NULL,
    `a_break_time` DATETIME(3) NOT NULL,
    `a_work_hours` DATETIME(3) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_report` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `r_sender` BIGINT NOT NULL,
    `r_receiver` VARCHAR(128) NOT NULL,
    `r_cc` VARCHAR(128) NOT NULL,
    `r_subject` VARCHAR(128) NOT NULL,
    `r_meessage` VARCHAR(1024) NOT NULL,
    `r_attach_type` TINYINT NOT NULL,
    `r_attach_path` VARCHAR(128) NOT NULL,
    `r_schedule` DATETIME(3) NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_employee_note` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `n_title` VARCHAR(128) NOT NULL,
    `n_description` VARCHAR(1024) NOT NULL,
    `n_pin` TINYINT NOT NULL,
    `e_id` BIGINT NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_holiday_category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `c_name` VARCHAR(128) NOT NULL,
    `c_color` VARCHAR(64) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_holiday` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `h_name` VARCHAR(128) NOT NULL,
    `h_category` BIGINT NOT NULL,
    `h_date` DATE NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_leave_category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `c_name` VARCHAR(128) NOT NULL,
    `c_color` VARCHAR(128) NOT NULL,
    `c_allow_days` INTEGER NOT NULL,
    `c_info` VARCHAR(1024) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_leave` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `e_id` BIGINT NOT NULL,
    `c_id` BIGINT NOT NULL,
    `l_date` DATE NOT NULL,
    `l_description` VARCHAR(1024) NOT NULL,
    `l_request_status` TINYINT NOT NULL,
    `l_reject_comment` VARCHAR(128) NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_employee_leave` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `e_id` BIGINT NOT NULL,
    `c_id` BIGINT NOT NULL,
    `t_remain_leave` INTEGER NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_news` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `n_photo_path_1` VARCHAR(1024) NULL,
    `n_photo_path_2` VARCHAR(1024) NULL,
    `n_photo_path_3` VARCHAR(1024) NULL,
    `n_photo_path_4` VARCHAR(1024) NULL,
    `n_photo_path_5` VARCHAR(1024) NULL,
    `n_photo_path_6` VARCHAR(1024) NULL,
    `n_title` VARCHAR(128) NOT NULL,
    `n_description` VARCHAR(1024) NOT NULL,
    `n_tag` INTEGER NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_message_category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `c_name` VARCHAR(128) NOT NULL,
    `c_color` VARCHAR(128) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_message` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `m_photo_path_1` VARCHAR(1024) NULL,
    `m_photo_path_2` VARCHAR(1024) NULL,
    `m_photo_path_3` VARCHAR(1024) NULL,
    `m_title` VARCHAR(128) NOT NULL,
    `m_description` VARCHAR(1024) NOT NULL,
    `m_category` BIGINT NOT NULL,
    `d_id` VARCHAR(128) NOT NULL,
    `e_id` VARCHAR(128) NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,
    `m_employeeId` BIGINT NULL,
    `m_departmentId` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_office_setting` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `o_name` VARCHAR(128) NOT NULL,
    `o_category` VARCHAR(64) NOT NULL,
    `o_location` VARCHAR(128) NOT NULL,
    `o_lat` VARCHAR(128) NOT NULL,
    `o_long` VARCHAR(128) NOT NULL,
    `o_start_time` TIME NOT NULL,
    `o_end_time` TIME NOT NULL,
    `o_break_time` TIME NOT NULL,
    `o_break_duration` INTEGER NOT NULL,
    `del_flg` TINYINT NOT NULL DEFAULT 0,
    `create_by` BIGINT NOT NULL,
    `update_by` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `m_township` ADD CONSTRAINT `m_township_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_township` ADD CONSTRAINT `m_township_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_job_type` ADD CONSTRAINT `m_job_type_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_job_type` ADD CONSTRAINT `m_job_type_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_shift_time` ADD CONSTRAINT `m_shift_time_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_shift_time` ADD CONSTRAINT `m_shift_time_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee` ADD CONSTRAINT `m_employee_e_township_id_fkey` FOREIGN KEY (`e_township_id`) REFERENCES `m_township`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee` ADD CONSTRAINT `m_employee_e_job_id_fkey` FOREIGN KEY (`e_job_id`) REFERENCES `m_job_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee` ADD CONSTRAINT `m_employee_e_shift_time_id_fkey` FOREIGN KEY (`e_shift_time_id`) REFERENCES `m_shift_time`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee` ADD CONSTRAINT `m_employee_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee` ADD CONSTRAINT `m_employee_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_department` ADD CONSTRAINT `m_department_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_department` ADD CONSTRAINT `m_department_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_department` ADD CONSTRAINT `t_employee_department_e_id_fkey` FOREIGN KEY (`e_id`) REFERENCES `m_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_department` ADD CONSTRAINT `t_employee_department_d_id_fkey` FOREIGN KEY (`d_id`) REFERENCES `m_department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_department` ADD CONSTRAINT `t_employee_department_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_department` ADD CONSTRAINT `t_employee_department_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_attendance_status` ADD CONSTRAINT `m_attendance_status_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_attendance_status` ADD CONSTRAINT `m_attendance_status_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_attendance` ADD CONSTRAINT `t_attendance_e_id_fkey` FOREIGN KEY (`e_id`) REFERENCES `m_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_attendance` ADD CONSTRAINT `t_attendance_a_status_id_fkey` FOREIGN KEY (`a_status_id`) REFERENCES `m_attendance_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_attendance` ADD CONSTRAINT `t_attendance_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_attendance` ADD CONSTRAINT `t_attendance_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_report` ADD CONSTRAINT `m_report_r_sender_fkey` FOREIGN KEY (`r_sender`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_report` ADD CONSTRAINT `m_report_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_report` ADD CONSTRAINT `m_report_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee_note` ADD CONSTRAINT `m_employee_note_e_id_fkey` FOREIGN KEY (`e_id`) REFERENCES `m_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee_note` ADD CONSTRAINT `m_employee_note_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_employee_note` ADD CONSTRAINT `m_employee_note_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_holiday_category` ADD CONSTRAINT `m_holiday_category_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_holiday_category` ADD CONSTRAINT `m_holiday_category_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_holiday` ADD CONSTRAINT `m_holiday_h_category_fkey` FOREIGN KEY (`h_category`) REFERENCES `m_holiday_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_holiday` ADD CONSTRAINT `m_holiday_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_holiday` ADD CONSTRAINT `m_holiday_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_leave_category` ADD CONSTRAINT `m_leave_category_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_leave_category` ADD CONSTRAINT `m_leave_category_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_leave` ADD CONSTRAINT `m_leave_e_id_fkey` FOREIGN KEY (`e_id`) REFERENCES `m_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_leave` ADD CONSTRAINT `m_leave_c_id_fkey` FOREIGN KEY (`c_id`) REFERENCES `m_leave_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_leave` ADD CONSTRAINT `m_leave_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_leave` ADD CONSTRAINT `m_leave_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_leave` ADD CONSTRAINT `t_employee_leave_e_id_fkey` FOREIGN KEY (`e_id`) REFERENCES `m_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_leave` ADD CONSTRAINT `t_employee_leave_c_id_fkey` FOREIGN KEY (`c_id`) REFERENCES `m_leave_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_leave` ADD CONSTRAINT `t_employee_leave_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_employee_leave` ADD CONSTRAINT `t_employee_leave_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_news` ADD CONSTRAINT `m_news_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_news` ADD CONSTRAINT `m_news_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_message_category` ADD CONSTRAINT `m_message_category_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_message_category` ADD CONSTRAINT `m_message_category_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_message` ADD CONSTRAINT `m_message_m_category_fkey` FOREIGN KEY (`m_category`) REFERENCES `m_message_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_message` ADD CONSTRAINT `m_message_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_message` ADD CONSTRAINT `m_message_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_message` ADD CONSTRAINT `m_message_m_employeeId_fkey` FOREIGN KEY (`m_employeeId`) REFERENCES `m_employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_message` ADD CONSTRAINT `m_message_m_departmentId_fkey` FOREIGN KEY (`m_departmentId`) REFERENCES `m_department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_office_setting` ADD CONSTRAINT `m_office_setting_create_by_fkey` FOREIGN KEY (`create_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_office_setting` ADD CONSTRAINT `m_office_setting_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `m_admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
