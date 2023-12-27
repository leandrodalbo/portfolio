import axios from "axios";
import emailParams from "../../assets/emailParams.json";

interface EmailServiceParams {
  serviceId: string;
  templateId: string;
  userId: string;
  endpoint: string;
  accessToken: string;
}

export interface MailTemplate {
  subject: string;
  name: string;
  email: string;
  message: string;
}

export class EmailService {
  public async sendEmail(mail: MailTemplate) {
    const { accessToken, serviceId, userId, templateId, endpoint } =
      this.getMailParams();

    const data = {
      service_id: serviceId,
      template_id: templateId,
      accessToken: accessToken,
      user_id: userId,
      template_params: {
        ...mail,
      },
    };

    try {
      const resp = await axios.post(endpoint, data);

      if (resp.status >= 200 && resp.status <= 300) {
        return "Message Successfully Sent";
      }
    } catch (e) {
      return `Message Failed, ${e}`;
    }

    return "Message Failed";
  }

  public getMailParams(): EmailServiceParams {
    return { ...emailParams };
  }
}

const emailService = new EmailService();

export default emailService;
