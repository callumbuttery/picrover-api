import { Injectable } from '@nestjs/common';

@Injectable()
export class MailingService {
    addToMailingList(email: string) {
        console.log('hitting service: ', email)
        return email;
    }
}
