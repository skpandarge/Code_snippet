//Author - Shiv Pandarge
//googleapis package
const { google } = require('googleapis')

// Require oAuth2
const { OAuth2 } = google.auth

// Set Client ID & Client Secret
const oAuth2Client = new OAuth2(
    '43623686198-0ur3s4r7m85ftbvgnfp17k52r7dmgs67.apps.googleusercontent.com',
    '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'
)

//Set refresh token
oAuth2Client.setCredentials({
  refresh_token: '1//046o1BUzIz2ouCgYIARAAGAQSNwF-L9IrNB_X_xXfK1Vc9fTbFevVOwLqMvm80tlaKCzId1dvrnvTdAT9nY5h6ojq8v3I1FxKqZ4',
})

// Calender instance
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Event start date
const eventStartTime = new Date()
console.log('event start time', eventStartTime )

// Event end date
const eventEndTime = new Date()
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)
console.log('event start time', eventEndTime )
// Define an Event
const event = {
  summary: 'Calendar Event',
  location: 'Online meeting',
  description: 'Demonstrate the api',
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'Asia/Kolkata',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'Asia/Kolkata',
  },
}

// Insert an Event
calendar.events.insert(
            { calendarId: 'primary', resource: event },
            err => {
               // Report error if any
               if (err) console.error('Error Creating Calender Event:', err)
               console.log('Calendar event successfully created.')
             }
)