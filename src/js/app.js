require('./bootstrap')

/**
 * SHOW ENVIRONMENT VARIABLES JS
 */
let showEnvironmentVariables = () => {
    console.log(process.env.MIX_APP_NAME)
}

$(document).ready(() => {
    showEnvironmentVariables()
})
