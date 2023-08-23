export const BASE_URL = ''
export const PRODUCTS_URL = '/api/products'
export const USERS_URL = '/api/users'
export const ORDERS_URL = '/api/orders'
export const PAYPAL_URL = '/api/config/paypal'
export const UPLOAD_URL = '/api/upload'
/* export const PRODUCT_DETAILS_URL = '/api/products'
export const CART_URL = '/api/cart'
export const ORDER_URL = '/api/orders'
export const USER_URL = '/api/users'
export const LOGIN_URL = '/api/users/login'
export const REGISTER_URL = '/api/users/register'
export const PROFILE_URL = '/api/users/profile'
export const USER_LIST_URL = '/api/users'
export const USER_DELETE_URL = '/api/users'
export const USER_UPDATE_URL = '/api/users'
export const ORDER_LIST_URL = '/api/orders'
export const ORDER_DELIVER_URL = '/api/orders'
export const PAYMENT_URL = '/api/payments'
export const PAYMENT_CONFIRM_URL = '/api/payments/confirm'
export const PAYMENT_CANCEL_URL = '/api/payments/cancel'
export const PAYMENT_SUCCESS_URL = '/api/payments/success'
export const PAYMENT_FAIL_URL = '/api/payments/fail'
export const PAYMENT_WEBHOOK_URL = '/api/payments/webhook'
export const PAYMENT_WEBHOOK_CONFIRM_URL = '/api/payments/webhook/confirm'
export const PAYMENT_WEBHOOK_CANCEL_URL = '/api/payments/webhook/cancel'
export const PAYMENT_WEBHOOK_SUCCESS_URL = '/api/payments/webhook/success'
export const PAYMENT_WEBHOOK_FAIL_URL = '/api/payments/webhook/fail'
export const PAYMENT_WEBHOOK_ERROR_URL = '/api/payments/webhook/error'
export const PAYMENT_WEBHOOK_REFUND_URL = '/api/payments/webhook/refund'
export const PAYMENT_WEBHOOK_REFUND_CONFIRM_URL =
'/api/payments/webhook/refund-confirm'
export const PAYMENT_WEBHOOK_REFUND_CANCEL_URL =
'/api/payments/webhook/refund-cancel'
export const PAYMENT_WEBHOOK_REFUND_SUCCESS_URL =
'/api/payments/webhook/refund-success'
export const PAYMENT_WEBHOOK_REFUND_FAIL_URL =
'/api/payments/webhook/refund-fail'
export const PAYMENT_WEBHOOK_REFUND_ERROR_URL =
'/api/payments/webhook/refund-error'
export const PAYMENT_WEBHOOK_CHARGEBACK_URL =
'/api/payments/webhook/chargeback'
export const PAYMENT_WEBHOOK_CHARGEBACK_CONFIRM_URL =
'/api/payments/webhook/chargeback-confirm'
export const PAYMENT_WEBHOOK_CHARGEBACK_CANCEL_URL =
'/api/payments/webhook/chargeback-cancel'
export const PAYMENT_WEBHOOK_CHARGEBACK_SUCCESS_URL =
'/api/payments/webhook/chargeback-success'
export const PAYMENT_WEBHOOK_CHARGEBACK_FAIL_URL =
'/api/payments/webhook/chargeback-fail'
export const PAYMENT_WEBHOOK_CHARGEBACK_ERROR_URL =
'/api/payments/webhook/chargeback-error'
export const PAYMENT_WEBHOOK_CHARGEBACK_REVERSED_URL =
'/api/payments/webhook/chargeback-reversed'
export const PAYMENT_WEBHOOK_CHARGEBACK_REVERSED_CONFIRM_URL =
'/api/payments/webhook/chargeback-reversed-confirm'
export const PAYMENT_WEBHOOK_CHARGEBACK_REVERSED_CANCEL_URL =
'/api/payments/webhook/chargeback-reversed-cancel'
export const PAYMENT_WEBHOOK_CHARGEBACK_REVERSED_SUCCESS_URL =
'/api/payments/webhook/chargeback-reversed-success'
export const PAYMENT_WEBHOOK_CHARGEBACK_REVERSED_FAIL_URL =
'/api/payments/webhook/chargeback-reversed-fail'
export const PAYMENT_WEBHOOK_CHARGEBACK_REVERSED_ERROR_URL =
'/api/payments/webhook/chargeback-reversed-error'
export const PAYMENT_WEBHOOK_CHARGEBACK_LOST_URL =
'/api/payments/webhook/chargeback-lost'
export const PAYMENT_WEBHOOK_CHARGEBACK_LOST_CONFIRM_URL =
'/api/payments/webhook/chargeback-lost-confirm'
export const PAYMENT_WEBHOOK_CHARGEBACK_LOST_CANCEL_URL =
'/api/payments/webhook/chargeback-lost-cancel'
export const PAYMENT_WEBHOOK_CHARGEBACK_LOST_SUCCESS_URL =
'/api/payments/webhook/chargeback-lost-success'
export const PAYMENT_WEBHOOK_CHARGEBACK_LOST_FAIL_URL =
'/api/payments/webhook/chargeback-lost-fail'
export const PAYMENT_WEBHOOK_CHARGEBACK_LOST_ERROR_URL =
'/api/payments/webhook/chargeback-lost-error'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_URL =
'/api/payments/webhook/chargeback-won'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_CONFIRM_URL =
'/api/payments/webhook/chargeback-won-confirm'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_CANCEL_URL =
'/api/payments/webhook/chargeback-won-cancel'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_SUCCESS_URL =
'/api/payments/webhook/chargeback-won-success'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_FAIL_URL =
'/api/payments/webhook/chargeback-won-fail'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_ERROR_URL =
'/api/payments/webhook/chargeback-won-error'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_REVERSED_URL =
'/api/payments/webhook/chargeback-won-reversed'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_REVERSED_CONFIRM_URL =
'/api/payments/webhook/chargeback-won-reversed-confirm'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_REVERSED_CANCEL_URL =
'/api/payments/webhook/chargeback-won-reversed-cancel'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_REVERSED_SUCCESS_URL =
'/api/payments/webhook/chargeback-won-reversed-success'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_REVERSED_FAIL_URL =
'/api/payments/webhook/chargeback-won-reversed-fail'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_REVERSED_ERROR_URL =
'/api/payments/webhook/chargeback-won-reversed-error'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_URL =
'/api/payments/webhook/chargeback-won-lost'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_CONFIRM_URL =
'/api/payments/webhook/chargeback-won-lost-confirm'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_CANCEL_URL =
'/api/payments/webhook/chargeback-won-lost-cancel'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_SUCCESS_URL =
'/api/payments/webhook/chargeback-won-lost-success'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_FAIL_URL =
'/api/payments/webhook/chargeback-won-lost-fail'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_ERROR_URL =
'/api/payments/webhook/chargeback-won-lost-error'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_REVERSED_URL =
'/api/payments/webhook/chargeback-won-lost-reversed'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_REVERSED_CONFIRM_URL =
'/api/payments/webhook/chargeback-won-lost-reversed-confirm'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_REVERSED_CANCEL_URL =
'/api/payments/webhook/chargeback-won-lost-reversed-cancel'
export const PAYMENT_WEBHOOK_CHARGEBACK_WON_LOST_REVERSED_SUCCESS_URL =
'/api/payments/webhook/chargeback-won-lost-reversed-success' */
