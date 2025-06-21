// Vercel serverless function for the main page
module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>VidFast Stremio Add-on</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    margin: 0;
                    padding: 20px;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .container {
                    background: white;
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    text-align: center;
                    max-width: 600px;
                    width: 100%;
                }
                .logo {
                    width: 100px;
                    height: 100px;
                    background: #FF6B35;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 30px;
                    font-size: 36px;
                    color: white;
                    font-weight: bold;
                }
                h1 {
                    color: #333;
                    margin-bottom: 10px;
                    font-size: 2.5em;
                }
                .subtitle {
                    color: #666;
                    margin-bottom: 30px;
                    font-size: 1.2em;
                }
                .manifest-url {
                    background: #f8f9fa;
                    border: 2px dashed #FF6B35;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 30px 0;
                    font-family: 'Courier New', monospace;
                    word-break: break-all;
                    font-size: 16px;
                    color: #333;
                }
                .instructions {
                    text-align: right;
                    background: #e3f2fd;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .instructions h3 {
                    color: #1976d2;
                    margin-top: 0;
                }
                .step {
                    margin: 10px 0;
                    padding: 5px 0;
                }
                .status {
                    background: #4caf50;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                    display: inline-block;
                    margin: 20px 0;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="logo">VF</div>
                <h1>🎬 VidFast Stremio Add-on</h1>
                <p class="subtitle">إضافة Stremio للبث المباشر من VidFast.pro</p>
                
                <div class="status">✅ الإضافة تعمل بنجاح!</div>
                
                <div class="manifest-url">
                    ${req.headers.host}/manifest.json
                </div>
                
                <div class="instructions">
                    <h3>📋 طريقة التثبيت:</h3>
                    <div class="step">1. افتح تطبيق Stremio</div>
                    <div class="step">2. اذهب إلى Add-ons → Community Add-ons</div>
                    <div class="step">3. انسخ الرابط أعلاه والصقه في خانة "Addon Repository Url"</div>
                    <div class="step">4. اضغط على Install</div>
                </div>
                
                <p style="color: #666; margin-top: 30px;">
                    بعد التثبيت ستجد مصادر VidFast متاحة عند البحث عن الأفلام والمسلسلات
                </p>
            </div>
        </body>
        </html>
    `);
}; 
