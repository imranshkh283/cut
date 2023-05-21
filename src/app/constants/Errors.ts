export class Errors {

    static readonly IS_REQUIRED: string = "is Required";
    static readonly INVALID_ID: string = "Invalid _id";
    static readonly INVALID_TO: string = "Invalid To";
    static readonly INVALID_FROM: string = "Invalid From";
    static readonly INVALID_OR_REQUIRED: string = "Invalid Or Required";
    static readonly INVALID_USER_ID: string = "Invalid UserId";
    static readonly INVALID_SKU_ID: string = "Invalid skuId";
    static readonly INVALID_LAB_ID: string = "Invalid labId";
    static readonly INVALID_COMPANY_TYPE_ID: string = "Invalid companyTypeId";
    static readonly INVALID_PARENT_COMPANY_ID: string = "Invalid parentCompanyId";
    static readonly INVALID_CARAT_PRICE_MASTER_ID: string = "Invalid caratPriceMasterId";
    static readonly INVALID_INFINITY_PRICE_MASTER_ID: string = "Invalid infinityPriceMasterId";
    static readonly INVALID_CLARITY_MASTER_ID: string = "Invalid clarityMasterId";
    static readonly INVALID_COLOR_MASTER_ID: string = "Invalid ColorMasterId";
    static readonly INVALID_COMPANY_SUB_TYPE_ID: string = "Invalid companySubTypeId";
    static readonly INVALID_USER: string = "Invalid User";
    static readonly INVALID_ROLE_ID: string = "Invalid RoleId";
    static readonly INVALID_STATUS_ID: string = "Invalid StatusId";
    static readonly INVALID_ALERT_ID: string = "Invalid AlertId";
    static readonly INVALID_COMPANY_ID: string = "Invalid CompanyId";
    // static readonly MONGOOSE_ERROR: string = "Mongoose Error";
    static readonly SERVER_RUNTIME_ERROR: string = "Server Runtime Error";
    static readonly TERMINATE_SERVER_PROCESS: string = "Terminating Server Process";
    static readonly FINGERPRINT_IS_REQUIRED: string = "FingerPrint is required";
    static readonly BADGED_ID_IS_REQUIRED: string = "badgeId is required";
    static readonly INVALID_TOKEN: string = "Invalid Token"
    static readonly INVALID_FINGERPRINT: string = "Invalid fingerPrint"
    static readonly DEVICE_NOT_REGISTERED: string = "device not registered"
    static readonly DIAMOND_MATCH_NOT_REGISTERED: string = "diamondMatch not registered"
    static readonly EMAIL_IN_USE: string = "Email In Use"

    static readonly DIAMOND_MATCH_IS_NOT_THERE: string = "diamond Match is not there"
    static readonly EMAIL_ID: string = "Email Id Required";
    static readonly PASSWORD: string = "Password should contain at least 1 capital, 1 small, 1 number and 1 symbol";
    static readonly NUMBER_IN_USE: string = "Number In Use"
    static readonly OLD_PASSWORD: string = "Old Password should contain at least 1 capital, 1 small, 1 number and 1 symbol";
    static readonly NEW_PASSWORD: string = "New Password should contain at least 1 capital, 1 small, 1 number and 1 symbol";
    static readonly OTP: string = "Otp Required";
    static readonly INVALID_TRANSACTION_ID: string = "Invalid TransactionId";
    static readonly INVALID_EMAIL_ID: string = "Invalid Email Id";
    static readonly FIRSTNAME_ERROR: string = "First Name Required";
    static readonly LASTNAME_ERROR: string = "Last Name Required";
    static readonly AMOUNT_ERROR: string = "Amount Required";
    static readonly NO_ACTION: string = "there are no action for all inventories";
    static readonly INVALID_PHONE_NUMBER: string = "Invalid mobile number"
    static readonly INVALID_RECIEVER: string = "Invalid reciever";
    static readonly INVALID_CC: string = "Invalid cc";
    static readonly INVALID_ALERT_CATEGORY_ID: string = "Invalid AlertCategoryId";
    static readonly INVALID_ALERT_LEVEL_ID: string = "Invalid AlertLevelId";
    static readonly INVALID_ALERT_TYPE_ID: string = "Invalid AlertTypeId";
    static readonly INVALID_SCHEDULE_TIME: string = "Invalid scheduleTime";
    static readonly ROLEID_LINKED_WITH_ACTIVE_USER: string = "roleId linked with active user";
    static readonly COMPANYTYPEID_LINKED_WITH_ACTIVE_COMPANY: string = "companyTypeId linked with active company";
    static readonly COMPANYSUBTYPEID_LINKED_WITH_ACTIVE_COMPANY: string = "companySubTypeId linked with active company";
    static readonly COMPANYSUBTYPEID_LINKED_WITH_ACTIVE_COMPANYTYPE: string = "companySubTypeId linked with active companyType";
    static readonly DEVICETYPEID_LINKED_WITH_ACTIVE_DEVICE: string = "deviceTypeID linked with active device";
    static readonly COMPANYTYPEID_LINKED_WITH_ACTIVE_ROLE: string = "companyTypeId linked with active role";
    static readonly INVALID_PHONE_NUMBER_CODE: string = "Invalid interNationalCode"
    static readonly INVALID_PRIMARY_CODE: string = "Invalid primaryCode"
    static readonly INVALID_SECONDARY_CODE: string = "Invalid secondaryCode"
    static readonly COMPANY_NOT_YET_OPENED: string = "Business not yet opened"
    static readonly SKU_NOT_IN_CABINET: string = "sku not present in cabinet"
    static readonly EMAIL_PRESENT: string = "Email already Present"
    static readonly PHONE_NUMBER_PRESENT: string = "Phone number already Present"
    static readonly ALTERNATE_EMAIL_PRESENT: string = "Alternate Email already Present"
    static readonly UPER_IS_ALREADY_DELETED: string = "User is deleted, please contact administrator."
    static readonly INVALID_ALERT_SUB_CATEGORY_ID: string = "Invalid AlertSubCategoryId";
    static readonly PRODUCT_NOT_FOUND: string = "Product not found";
    static readonly INVALID_PRODUCT_ID: string = "Invalid ProductId";
    static readonly PRODUCT_OUT_OF_STOCK: string = "Product out of stock";

    // user profile
    static readonly INVALID_OLD_PASSWORD: string = "Invalid Old Password";
    static readonly OLD_AND_NEW_PASSWORD_CANNOT_BE_SAME = "Old And New Password Cannot be Same";
    static readonly INVALID_ADDRESS = "Invalid Address";
    static readonly EMPTY_CART = "Cart is Empty";

}