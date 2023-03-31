import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const startDate = req.query.startDate;
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });

  const analytics = google.analytics({
    auth,
    version: 'v3',
  });

  const response = await analytics.data.ga.get({
    'start-date': '2022-10-01',
    'end-date': 'today',
    ids: 'ga:335232168',
    metrics: 'ga:pageviews',
  });

  return res.status(200).json({
    pageViews: response?.data,
  });
}
