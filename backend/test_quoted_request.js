const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDFiMmMzZDRlNWY2Nzg5MDEyMzQ1NiIsImlhdCI6MTc4NDEwNzc4MSwiZXhwIjoxNzg0MTExMzgxfQ.2Al2gjRF5o6LYO3Rx4DFQjwfRNW0ubvVwrTI1EaGWuo';

(async () => {
  try {
    const BASE_URL = process.env.NODE_ENV === 'production'
      ? 'https://smilecraft-api-q1y5.onrender.com/api/appointments/test'
      : 'http://localhost:5000/api/appointments/test';

    const res = await fetch(BASE_URL, {
      headers: { authorization: `"Bearer ${t}"` },
    });
    console.log('status', res.status);
    console.log(await res.text());
  } catch (err) {
    console.error(err);
  }
})();
