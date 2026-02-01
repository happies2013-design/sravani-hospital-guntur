// Role definitions and permissions

export const USER_ROLES = {
    // Administrative
    SUPER_ADMIN: 'superAdmin',
    ADMIN: 'admin',
    MANAGER: 'manager',

    // Medical Staff
    DOCTOR: 'doctor',
    NURSE: 'nurse',
    SURGEON: 'surgeon',
    ANESTHESIOLOGIST: 'anesthesiologist',
    RADIOLOGIST: 'radiologist',

    // Support Staff
    RECEPTIONIST: 'receptionist',
    PHARMACIST: 'pharmacist',
    LAB_TECH: 'labTech',
    SCAN_TECH: 'scanTech',
    MEDICAL_RECORDS: 'medicalRecords',
    BILLING: 'billing',

    // Educational
    INTERN: 'intern',
    STUDENT: 'student',
    RESIDENT: 'resident',

    // Patient
    PATIENT: 'patient',
    GUARDIAN: 'guardian'
};

export const PERMISSIONS = {
    // User Management
    MANAGE_USERS: 'manage_users',
    VIEW_USERS: 'view_users',
    CREATE_USER: 'create_user',
    EDIT_USER: 'edit_user',
    DELETE_USER: 'delete_user',

    // Patient Management
    VIEW_ALL_PATIENTS: 'view_all_patients',
    VIEW_OWN_PATIENTS: 'view_own_patients',
    CREATE_PATIENT: 'create_patient',
    EDIT_PATIENT: 'edit_patient',
    VIEW_PATIENT_HISTORY: 'view_patient_history',

    // Appointments
    BOOK_APPOINTMENT: 'book_appointment',
    VIEW_ALL_APPOINTMENTS: 'view_all_appointments',
    VIEW_OWN_APPOINTMENTS: 'view_own_appointments',
    CANCEL_APPOINTMENT: 'cancel_appointment',
    RESCHEDULE_APPOINTMENT: 'reschedule_appointment',

    // Medical Records
    CREATE_PRESCRIPTION: 'create_prescription',
    VIEW_PRESCRIPTION: 'view_prescription',
    CREATE_LAB_ORDER: 'create_lab_order',
    VIEW_LAB_RESULTS: 'view_lab_results',
    ENTER_LAB_RESULTS: 'enter_lab_results',
    CREATE_SCAN_ORDER: 'create_scan_order',
    VIEW_SCAN_RESULTS: 'view_scan_results',
    ENTER_SCAN_RESULTS: 'enter_scan_results',

    // Billing
    VIEW_BILLS: 'view_bills',
    CREATE_BILL: 'create_bill',
    PROCESS_PAYMENT: 'process_payment',

    // Pharmacy
    DISPENSE_MEDICATION: 'dispense_medication',
    VIEW_INVENTORY: 'view_inventory',
    MANAGE_INVENTORY: 'manage_inventory',

    // Reports
    VIEW_REPORTS: 'view_reports',
    GENERATE_REPORTS: 'generate_reports',

    // System
    MANAGE_DEPARTMENTS: 'manage_departments',
    MANAGE_SETTINGS: 'manage_settings',
    VIEW_AUDIT_LOGS: 'view_audit_logs',

    // Communication
    SEND_NOTIFICATIONS: 'send_notifications',
    ACCESS_CHAT: 'access_chat',
    VIDEO_CONSULTATION: 'video_consultation'
};

export const ROLE_PERMISSIONS = {
    [USER_ROLES.SUPER_ADMIN]: ['*'], // All permissions

    [USER_ROLES.ADMIN]: [
        PERMISSIONS.MANAGE_USERS,
        PERMISSIONS.VIEW_USERS,
        PERMISSIONS.CREATE_USER,
        PERMISSIONS.EDIT_USER,
        PERMISSIONS.VIEW_ALL_PATIENTS,
        PERMISSIONS.VIEW_ALL_APPOINTMENTS,
        PERMISSIONS.VIEW_REPORTS,
        PERMISSIONS.GENERATE_REPORTS,
        PERMISSIONS.MANAGE_DEPARTMENTS,
        PERMISSIONS.MANAGE_SETTINGS,
        PERMISSIONS.VIEW_AUDIT_LOGS,
        PERMISSIONS.SEND_NOTIFICATIONS
    ],

    [USER_ROLES.MANAGER]: [
        PERMISSIONS.VIEW_USERS,
        PERMISSIONS.VIEW_ALL_PATIENTS,
        PERMISSIONS.VIEW_ALL_APPOINTMENTS,
        PERMISSIONS.VIEW_REPORTS,
        PERMISSIONS.GENERATE_REPORTS,
        PERMISSIONS.MANAGE_DEPARTMENTS
    ],

    [USER_ROLES.DOCTOR]: [
        PERMISSIONS.VIEW_OWN_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY,
        PERMISSIONS.CREATE_PRESCRIPTION,
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.CREATE_LAB_ORDER,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.CREATE_SCAN_ORDER,
        PERMISSIONS.VIEW_SCAN_RESULTS,
        PERMISSIONS.VIEW_OWN_APPOINTMENTS,
        PERMISSIONS.RESCHEDULE_APPOINTMENT,
        PERMISSIONS.VIDEO_CONSULTATION,
        PERMISSIONS.ACCESS_CHAT
    ],

    [USER_ROLES.NURSE]: [
        PERMISSIONS.VIEW_OWN_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY,
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.VIEW_SCAN_RESULTS,
        PERMISSIONS.DISPENSE_MEDICATION,
        PERMISSIONS.ACCESS_CHAT
    ],

    [USER_ROLES.SURGEON]: [
        PERMISSIONS.VIEW_OWN_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY,
        PERMISSIONS.CREATE_PRESCRIPTION,
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.CREATE_LAB_ORDER,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.CREATE_SCAN_ORDER,
        PERMISSIONS.VIEW_SCAN_RESULTS,
        PERMISSIONS.VIEW_OWN_APPOINTMENTS,
        PERMISSIONS.VIDEO_CONSULTATION
    ],

    [USER_ROLES.ANESTHESIOLOGIST]: [
        PERMISSIONS.VIEW_OWN_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY,
        PERMISSIONS.CREATE_PRESCRIPTION,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.VIEW_SCAN_RESULTS
    ],

    [USER_ROLES.RADIOLOGIST]: [
        PERMISSIONS.VIEW_SCAN_RESULTS,
        PERMISSIONS.ENTER_SCAN_RESULTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY
    ],

    [USER_ROLES.RECEPTIONIST]: [
        PERMISSIONS.CREATE_PATIENT,
        PERMISSIONS.EDIT_PATIENT,
        PERMISSIONS.BOOK_APPOINTMENT,
        PERMISSIONS.VIEW_ALL_APPOINTMENTS,
        PERMISSIONS.CANCEL_APPOINTMENT,
        PERMISSIONS.RESCHEDULE_APPOINTMENT,
        PERMISSIONS.ACCESS_CHAT
    ],

    [USER_ROLES.PHARMACIST]: [
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.DISPENSE_MEDICATION,
        PERMISSIONS.VIEW_INVENTORY,
        PERMISSIONS.MANAGE_INVENTORY
    ],

    [USER_ROLES.LAB_TECH]: [
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.ENTER_LAB_RESULTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY
    ],

    [USER_ROLES.SCAN_TECH]: [
        PERMISSIONS.VIEW_SCAN_RESULTS,
        PERMISSIONS.ENTER_SCAN_RESULTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY
    ],

    [USER_ROLES.MEDICAL_RECORDS]: [
        PERMISSIONS.VIEW_ALL_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY,
        PERMISSIONS.EDIT_PATIENT
    ],

    [USER_ROLES.BILLING]: [
        PERMISSIONS.VIEW_BILLS,
        PERMISSIONS.CREATE_BILL,
        PERMISSIONS.PROCESS_PAYMENT,
        PERMISSIONS.VIEW_ALL_PATIENTS
    ],

    [USER_ROLES.INTERN]: [
        PERMISSIONS.VIEW_OWN_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY,
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.VIEW_SCAN_RESULTS
    ],

    [USER_ROLES.STUDENT]: [
        PERMISSIONS.VIEW_OWN_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY
    ],

    [USER_ROLES.RESIDENT]: [
        PERMISSIONS.VIEW_OWN_PATIENTS,
        PERMISSIONS.VIEW_PATIENT_HISTORY,
        PERMISSIONS.CREATE_PRESCRIPTION,
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.CREATE_LAB_ORDER,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.VIDEO_CONSULTATION
    ],

    [USER_ROLES.PATIENT]: [
        PERMISSIONS.BOOK_APPOINTMENT,
        PERMISSIONS.VIEW_OWN_APPOINTMENTS,
        PERMISSIONS.CANCEL_APPOINTMENT,
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.VIEW_SCAN_RESULTS,
        PERMISSIONS.VIEW_BILLS,
        PERMISSIONS.VIDEO_CONSULTATION,
        PERMISSIONS.ACCESS_CHAT
    ],

    [USER_ROLES.GUARDIAN]: [
        PERMISSIONS.BOOK_APPOINTMENT,
        PERMISSIONS.VIEW_OWN_APPOINTMENTS,
        PERMISSIONS.VIEW_PRESCRIPTION,
        PERMISSIONS.VIEW_LAB_RESULTS,
        PERMISSIONS.VIEW_SCAN_RESULTS,
        PERMISSIONS.VIEW_BILLS
    ]
};

// Helper functions
export function hasPermission(userRole, permission) {
    const rolePermissions = ROLE_PERMISSIONS[userRole] || [];

    // Super admin has all permissions
    if (rolePermissions.includes('*')) {
        return true;
    }

    return rolePermissions.includes(permission);
}

export function hasAnyPermission(userRole, permissions) {
    return permissions.some(permission => hasPermission(userRole, permission));
}

export function hasAllPermissions(userRole, permissions) {
    return permissions.every(permission => hasPermission(userRole, permission));
}

export function getRolePermissions(userRole) {
    return ROLE_PERMISSIONS[userRole] || [];
}

export function getRoleName(roleCode) {
    const roleNames = {
        [USER_ROLES.SUPER_ADMIN]: 'Super Administrator',
        [USER_ROLES.ADMIN]: 'Administrator',
        [USER_ROLES.MANAGER]: 'Manager',
        [USER_ROLES.DOCTOR]: 'Doctor',
        [USER_ROLES.NURSE]: 'Nurse',
        [USER_ROLES.SURGEON]: 'Surgeon',
        [USER_ROLES.ANESTHESIOLOGIST]: 'Anesthesiologist',
        [USER_ROLES.RADIOLOGIST]: 'Radiologist',
        [USER_ROLES.RECEPTIONIST]: 'Receptionist',
        [USER_ROLES.PHARMACIST]: 'Pharmacist',
        [USER_ROLES.LAB_TECH]: 'Laboratory Technician',
        [USER_ROLES.SCAN_TECH]: 'Scanning Technician',
        [USER_ROLES.MEDICAL_RECORDS]: 'Medical Records',
        [USER_ROLES.BILLING]: 'Billing Staff',
        [USER_ROLES.INTERN]: 'Intern',
        [USER_ROLES.STUDENT]: 'Student',
        [USER_ROLES.RESIDENT]: 'Resident',
        [USER_ROLES.PATIENT]: 'Patient',
        [USER_ROLES.GUARDIAN]: 'Guardian'
    };

    return roleNames[roleCode] || roleCode;
}
