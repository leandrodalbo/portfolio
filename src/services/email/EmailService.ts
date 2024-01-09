import axios from "axios";
import emailParams from "../../assets/json/emailParams.json";

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
        return MESSAGE_SUCCESS;
      }
    } catch (e) {
      return MESSAGE_FAILED;
    }

    return MESSAGE_FAILED;
  }

  public getMailParams(): EmailServiceParams {
    return { ...emailParams };
  }
}

const emailService = new EmailService();

export const MESSAGE_SUCCESS = "Message Successfully Sent";
export const MESSAGE_FAILED = "Message Failed";

export default emailService;
