import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { User } from './models/user.model';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('register')
  register(@Body() user: User) {
    return this.accountService.register(user);
  }

  @Post('login')
  login(@Body() user: User) {
    return this.accountService.login(user);
  }
}
