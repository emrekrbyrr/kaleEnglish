import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

logger = logging.getLogger(__name__)

def send_contact_email(name: str, email: str, phone: str, company: str, message: str):
    """Send contact form submission via email"""
    
    try:
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', 465))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        contact_email = os.environ.get('CONTACT_EMAIL')
        
        if not all([smtp_host, smtp_user, smtp_password, contact_email]):
            logger.error("SMTP configuration is incomplete")
            return False
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'New Contact Form Submission from {name}'
        msg['From'] = smtp_user
        msg['To'] = contact_email
        
        # HTML email body
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
                        <p><strong>Phone:</strong> {phone if phone else 'Not provided'}</p>
                        <p><strong>Company:</strong> {company if company else 'Not provided'}</p>
                    </div>
                    
                    <div style="margin: 20px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #dc2626;">
                        <h3 style="margin-top: 0; color: #dc2626;">Message:</h3>
                        <p style="white-space: pre-wrap;">{message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
                        <p>This email was sent from the Kale Platform contact form at kalelift.com</p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Attach HTML body
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Send email via SSL
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        logger.info(f"Contact email sent successfully from {email}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {str(e)}")
        return False
