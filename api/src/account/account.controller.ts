import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { User } from './models/user.model';
import { AuthGuard } from './guards/auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('secret')
  getSecret() {
    return 'Secret!';
  }
}
