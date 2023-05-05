import { MailingService } from './mailing.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('mailing')
export class MailingController {
    constructor(private readonly mailingService: MailingService) {}

    @Post('/add')
    async addToMailingList(@Body() details) {
        console.log('hitting controller: ', details)
        const { email } = details
        return this.mailingService.addToMailingList(email);
    }
}
