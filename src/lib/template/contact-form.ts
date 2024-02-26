export const getContactFormHtml = (data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) => {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Portfolio - Thank You for Contacting Us</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
            }
            h1 {
                color: #333333;
            }
            h3 {
              color: #ffd2ab;
            }
            p {
                color: #666666;
            }
            a {
                color: #0078D4;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Contact Form</h1>
            <h3>User Name</h3>
            <p>${data.firstName} ${data.lastName}</p>
            <h3>User Email</h3>
            <p>${data.email}</p>
            <h3>Message</h3>
            <p>${data.message}</p>
        </div>
    </body>
    </html>
    `;

  return html;
};
