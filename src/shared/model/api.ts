const fieldsPath = '/fields/'
type Id = string | number

export const apiMap = {
    postLogin: '/auth/login',
    postRegister: '/register',
    postTokenRefresh: '/auth/refresh',
    postMe: '/auth/me',
    postLogout: '/auth/logout',
    postResendVerify: '/resend-mail-verify',
    postForgotPassword: '/forgot-password',
    postResetPassword: '/reset-password',
    getFields: '/get-fields',
    createField: fieldsPath,
    getFieldById: fieldsPath,
    deleteField: fieldsPath,
    editField: fieldsPath,
    createPlot: '/plots/add',
    getPlots: '/plots-all',
    getPlotdById: '/plots/get/',
    deletePlot: '/plots/delete/',
    editPlot: '/plots/edit/',
    uploadFile: '/upload-pdf/',
    getSoilTypes: '/soil-types',
    getCrops: '/crops',
    getFertile: '/ml-predict-fertile/',
    getAnalysis: '/get-analysis/',
    getTopRecomend: '/ml-top-recommend/',
    getRecomend: '/recommend/',
    getPh: '/ph/',
    generatePdf: '/generate-pdf/',
    getUserInfo: '/user-data/',
    editUserInfo: '/user-data-edit/',
    editUserPassword: '/user-password-edit/',
    editUserEmail: '/user-email-edit/',
    deleteUser: '/user-delete/',
}

export const routeMap = {
    home: '/',
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    fields: '/fields',
    fieldDetail: (id: Id) => `/field/${id}`,
    fieldEdit: (id: Id) => `/field/edit/${id}`,
    fieldCreate: '/field/create',
    plotCreate: (id: Id) => `/field/${id}/create/plot`,
    plotEdit: (fieldId: Id, plotId: Id) =>
        `/field/${fieldId}/plot/${plotId}/edit`,
    plotDetail: (fieldId: Id, plotId: Id) => `/field/${fieldId}/plot/${plotId}`,
    privacy: '/privacy',
    public: '/public',
    profile: '/profile',
    notFound: '*',
}
